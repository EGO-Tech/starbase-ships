import _ from 'lodash';
import nconf from 'nconf';
import { program } from 'commander';
import { Client, GatewayIntentBits } from 'discord.js';
import { readFileSync, writeFileSync } from 'fs';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';

import '../config.js';

const token = nconf.get('discord:token');

(async () => {
  if (!token) throw new Error('No Discord Token');

  program.argument('<ship json>', 'path to ship.json');
  program.option('--dry-run', 'dry run with no post to discord');
  program.parse();

  let file = program.args[0];
  if (file.endsWith('CHANGELOG.md'))
    file = file.replace('CHANGELOG.md', 'ship.json');

  let json;
  try {
    json = JSON.parse(readFileSync(file).toString());
  } catch {
    throw new Error('Error reading ship.json');
  }

  if (json.retired) return console.log(`Skipping ${file}, ship is retired`);

  if (!json.changelog)
    return console.log(`Skipping ${file}, no changelog data found`);

  const { path, changelog } = json;
  const { discord } = changelog;
  const dryRun = program.opts().dryRun;

  let content;
  try {
    content = readFileSync(`../${path}/${changelog.path}`).toString();
  } catch {
    throw new Error('Error reading changelog');
  }

  const markdown = await fromMarkdown(content);
  let length = 0;
  markdown.children = _(markdown.children)
    .map((child) => {
      const childLength = toMarkdown(child).length;
      const isOver = length > 2000 || length + childLength > 2000;

      length = length + childLength;
      return isOver ? null : child;
    })
    .compact()
    .value();

  if (_.last(markdown.children).type === 'heading')
    markdown.children = _.slice(markdown.children, 0, -1);

  content = toMarkdown(markdown);

  if (dryRun) console.log(content);

  if ((!discord && !json.discord) || dryRun)
    return console.log(`Skipping ${file}, no Discord url found`);

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.on('ready', async () => {
    const [_url, serverId, channelId, messageId] = (
      discord || json.discord
    ).match(/channels\/([0-9]+)\/([0-9]+)\/?([0-9]+)?/);

    if (!serverId || !channelId) return client.destroy();

    const server = await client.guilds.fetch(serverId);
    const channel = await server.channels.fetch(channelId);

    if (!messageId) {
      const message = await channel.send({ content });
      json.changelog.discord = message.url;
      writeFileSync(file, `${JSON.stringify(json, null, 2)}\n`);
    } else {
      const message = await channel.messages.fetch(messageId);
      await message.edit({ content });
    }

    client.destroy();
  });

  client.login(token);
})();
