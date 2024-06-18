import _ from 'lodash';
import nconf from 'nconf';
import { program } from 'commander';
import { Client, GatewayIntentBits } from 'discord.js';
import { readFileSync, writeFileSync } from 'fs';
import { table } from 'table';

import '../config.js';

const token = nconf.get('discord:token');

(async () => {
  if (!token) throw new Error('No Discord Token');

  program.argument('<ship json>', 'path to ship.json');
  program.option('--dry-run', 'dry run with no post to discord');
  program.parse();

  const file = program.args[0];

  let json;
  try {
    json = JSON.parse(readFileSync(file).toString());
  } catch {
    throw new Error('Error reading ship.json');
  }

  if (!json.buildCost)
    return console.log(`Skipping ${file}, no build cost data found`);

  const { discord, materials, cost } = json.buildCost;

  const config = {
    drawHorizontalLine: (lineIndex, rowCount) => {
      return (
        lineIndex === 0 ||
        lineIndex === 1 ||
        lineIndex === rowCount - 1 ||
        lineIndex === rowCount
      );
    },
    columns: [
      { alignment: 'left', width: 18 },
      { alignment: 'right', width: 11 },
      { alignment: 'right' },
    ],
  };

  const data = [['Material', 'Volume (kv)', 'Stacks']];
  _.each(materials, ({ label, kv, stacks }) => {
    data.push([label, kv.toLocaleString(), stacks.toLocaleString()]);
  });

  const costData = [['Cost Type', 'Credits']];
  _.each(cost, (credits, key) => {
    costData.push([_.capitalize(key), credits.toLocaleString()]);
  });

  const content = `# Build Cost
\`\`\`ansi
${table(data, config)}
\`\`\`
\`\`\`ansi
${table(costData, config)}
\`\`\`
`;

  const dryRun = program.opts().dryRun;

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
      json.buildCost.discord = message.url;
      writeFileSync(file, `${JSON.stringify(json, null, 2)}\n`);
    } else {
      const message = await channel.messages.fetch(messageId);
      await message.edit({ content });
    }

    client.destroy();
  });

  client.login(token);
})();
