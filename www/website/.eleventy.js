const _ = require('lodash');
const path = require('path');
const markdownItGithubHeading = require('markdown-it-github-headings');
const { EleventyRenderPlugin } = require('@11ty/eleventy');
const { accessSync, constants, readdirSync } = require('fs');

const basePath = path.join(__dirname, '../../');
process.env.NODE_ENV ??= 'development';

const getShipsData = ({ pathPrefix }) =>
  _(readdirSync(basePath, { withFileTypes: true }))
    .map((dir) => {
      const shipFile = path.join(basePath, dir.name, 'ship.json');
      try {
        accessSync(shipFile, constants.F_OK);
      } catch {
        return [];
      }

      const ship = require(shipFile);
      ship.webPath = `${pathPrefix}ships/${ship.slug}`;
      try {
        const premiumShipFile = path.join(
          basePath,
          dir.name,
          'premium',
          'ship.json'
        );
        accessSync(premiumShipFile, constants.F_OK);
        const premiumShip = require(premiumShipFile);
        premiumShip.webPath = `${pathPrefix}ships/${premiumShip.slug}`;
        return [ship, premiumShip];
      } catch {
        return [ship];
      }
    })
    .flatten()
    .compact()
    .orderBy('name')
    .value();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItGithubHeading, {
      prefixHeadingIds: false,
      enableHeadingLinkIcons: false,
    })
  );

  eleventyConfig.addPassthroughCopy({
    './_includes/assets/CNAME': 'CNAME',

    './node_modules/@nordhealth/css/lib/nord.min.css': 'css/nord.min.css',
    './node_modules/@nordhealth/themes/lib/nord-dark.css': 'css/nord-dark.css',
    './node_modules/@splidejs/splide/dist/css/splide.min.css':
      'css/splide.min.css',
    './node_modules/@nordhealth/fonts/lib/': 'css/fonts',

    './_includes/assets/js/nord-components.js': 'js/nord-components.js',
    './node_modules/@splidejs/splide/dist/js/splide.min.js': 'js/splide.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/all.min.js':
      'js/fontawesome.min.js',
    './node_modules/qs/dist/qs.js': 'js/qs.js',

    './_includes/assets/css/custom.css': 'css/custom.css',

    './_includes/images': 'images',
    '../../others/egotech/logos': 'images/logos',
  });

  eleventyConfig.addGlobalData('environment', () => process.env.NODE_ENV);
  eleventyConfig.addGlobalData('pathPrefix', () => eleventyConfig.pathPrefix);
  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());
  eleventyConfig.addGlobalData('ships', () => getShipsData(eleventyConfig));
};