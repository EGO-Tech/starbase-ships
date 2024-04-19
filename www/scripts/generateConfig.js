import _ from 'lodash';
import nconf from 'nconf';
import path from 'path';
import semverCompare from 'semver-compare';
import {
  accessSync,
  constants,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfmTable } from 'micromark-extension-gfm-table';
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table';
import {
  getLink,
  getSection,
  getShipLink,
  getShipName,
  getShipVersion,
} from '../lib/helpers/mdast.js';
import { createWorker } from 'tesseract.js';

import '../config.js';

const shipsPath = path.join(nconf.get('basePath'), nconf.get('ships:path'));
const shipsUrl = nconf.get('ships:url');
const shipsRepoUrl = nconf.get('ships:repo');
const readmePath = nconf.get('ships:paths:readme');
const changelogPath = nconf.get('ships:paths:changelog');
const knownIssuesPath = nconf.get('ships:paths:knownIssues');
const faqPath = nconf.get('ships:paths:faq');
const premiumPath = nconf.get('ships:paths:premium');
const buildCostPath = nconf.get('ships:paths:buildCost');

const getShipDirectories = (source) =>
  _(readdirSync(source, { withFileTypes: true }))
    .map((dir) => {
      try {
        accessSync(path.join(shipsPath, dir.name, readmePath), constants.F_OK);
      } catch {
        return [];
      }

      const shipPath = {
        relPath: dir.name,
        fullPath: path.join(shipsPath, dir.name),
      };
      try {
        const premiumShipPath = {
          relPath: `${dir.name}/${premiumPath}`,
          fullPath: path.join(shipPath.fullPath, premiumPath),
        };
        accessSync(
          path.join(premiumShipPath.fullPath, readmePath),
          constants.F_OK
        );
        return [shipPath, premiumShipPath];
      } catch {
        return [shipPath];
      }
    })
    .flatten()
    .compact()
    .value();

const getShipBlueprints = (source, { currentVersion, relPath }) => {
  const blueprintsPath = nconf.get('ships:paths:blueprints');
  try {
    return _(
      readdirSync(path.join(source, blueprintsPath), {
        withFileTypes: true,
      })
    )
      .map((dir) => {
        const noExt = path.basename(dir.name, '.fbe');
        const [ship, version] = noExt.split('_v');
        return {
          filename: dir.name,
          path: `${blueprintsPath}/${dir.name}`,
          url: `${shipsUrl}/${relPath}/${blueprintsPath}/${dir.name}`,
          version: version ?? currentVersion,
          description: '',
        };
      })
      .value();
  } catch {
    return [];
  }
};

const getShipPhotos = (source, { relPath, photosPath }) => {
  try {
    return _(
      readdirSync(path.join(source, photosPath), {
        withFileTypes: true,
      })
    )
      .map((dir) => {
        return {
          filename: dir.name,
          path: `${photosPath}/${dir.name}`,
          url: `${shipsUrl}/${relPath}/${photosPath}/${dir.name}`,
          description: '',
        };
      })
      .value();
  } catch {
    return [];
  }
};

const getShipVideos = (table) =>
  table
    ? _(table.children)
        .reject((_row, index) => index === 0)
        .map((row) => ({
          channel: getLink(row.children[0].children[0]),
          video: getLink(row.children[1].children[0]),
        }))
        .value()
    : [];

(async () => {
  const paths = getShipDirectories(shipsPath);
  _.each(paths, async ({ relPath, fullPath }) => {
    let json;
    try {
      json = JSON.parse(
        readFileSync(
          path.join(fullPath, nconf.get('ships:jsonFile'))
        ).toString()
      );
    } catch {
      json = {};
    }

    const readme = readFileSync(path.join(fullPath, readmePath)).toString();
    const markdown = await fromMarkdown(readme, {
      extensions: [gfmTable()],
      mdastExtensions: [gfmTableFromMarkdown()],
    });

    // Basic Details
    const name = getShipName(markdown);
    const version = getShipVersion(markdown);
    json.name ??= name;
    json.version ??= version;
    json.slug ??= _.kebabCase(json.name);
    json.path = relPath;
    json.readme = {
      path: readmePath,
      url: `${shipsUrl}/${relPath}/${readmePath}`,
    };
    json.changelog = {
      path: changelogPath,
      url: `${shipsUrl}/${relPath}/${changelogPath}`,
    };

    try {
      accessSync(path.join(fullPath, knownIssuesPath), constants.F_OK);
      json.knownIssues = {
        path: knownIssuesPath,
        url: `${shipsUrl}/${relPath}/${knownIssuesPath}`,
      };
    } catch {
      delete json.knownIssues;
    }

    try {
      accessSync(path.join(fullPath, faqPath), constants.F_OK);
      json.faq = {
        path: faqPath,
        url: `${shipsUrl}/${relPath}/${faqPath}`,
      };
    } catch {
      delete json.faq;
    }

    // Blueprints & Cost (Default: 500,000)
    const blueprints = getShipBlueprints(fullPath, {
      currentVersion: json.version,
      relPath,
    });
    json.blueprints = _.unionBy(json.blueprints, blueprints, 'filename')
      .map((blueprint) => _.set(blueprint, 'current', false))
      .sort((a, b) => semverCompare(b.version, a.version));
    if (!_.isEmpty(json.blueprints)) {
      _.set(json.blueprints, '[0].current', true);
      json.cost ??= 0;
    } else {
      json.cost ??= 500000;
    }
    json.saleType =
      !json.cost && !_.isEmpty(json.blueprints) ? 'free' : 'for-sale';

    // Photos & Images
    const photosPath = nconf.get('ships:paths:photos');
    const photos = getShipPhotos(fullPath, { relPath, photosPath });
    json.photos = _(json.photos)
      .unionBy(photos, 'filename')
      .sortBy(({ featured, order }) => (featured ? 0 : order))
      .value();

    const imagesPath = nconf.get('ships:paths:images');
    const images = getShipPhotos(fullPath, { relPath, photosPath: imagesPath });
    json.images = _(json.images)
      .unionBy(images, 'filename')
      .sortBy('order')
      .value();

    // Videos
    const videos = getShipVideos(getSection(markdown, 'Videos'));
    json.videos = _(json.videos)
      .unionBy(videos, 'video.url')
      .sortBy('order')
      .value();

    // Links
    const link = getShipLink(markdown, 'Starbase Ship Shop Page');
    const githubLink = {
      text: 'Ship GitHub Page',
      url: `${shipsRepoUrl}/${json.path}`,
    };
    json.links = _(json.links)
      .unionBy(_.compact([link, githubLink]), 'url')
      .sortBy('order')
      .value();

    // Build cost
    const worker = await createWorker('eng');
    const {
      data: { text },
    } = await worker.recognize(path.join(fullPath, buildCostPath));
    const lines = _(text).split('\n').compact().value();
    const materials = _(lines)
      .map((line) => line.match(/([a-zA-Z\s]+) ([0-9\s]+) kv \(([0-9\.]+) st/))
      .compact()
      .map(([_text, ore, kv, stacks]) => ({
        ore,
        kv: +kv.replace(/\s/g, ''),
        stacks: +stacks.replace(/\s/g, ''),
      }))
      .value();
    const cost = _(lines)
      .map((line) =>
        line.match(/([a-zA-Z\s\.]+) ([0-9\s]+)( ©| A| I| N| M| \\|$)/)
      )
      .compact()
      .map(([_text, type, credits]) => [
        _.toLower(type.split(/(\.\.\.|\s)/)[0]),
        +credits.replace(/\s/g, ''),
      ])
      .fromPairs()
      .value();
    await worker.terminate();
    json.buildCost = { materials, cost };

    writeFileSync(
      path.join(fullPath, nconf.get('ships:jsonFile')),
      `${JSON.stringify(json, null, 2)}\n`
    );
  });
})();
