const _ = require('lodash');
const nconf = require('nconf');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const { GoogleAuth } = require('google-auth-library');
const { GoogleSpreadsheet } = require('google-spreadsheet');

require('../config');

if (process.env.NODE_ENV === 'development')
  process.env.GOOGLE_APPLICATION_CREDENTIALS = nconf.get('googleCredentials');

async function runReport() {
  const sheetId = nconf.get('googleSheets:sheetId');
  const adcAuth = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });

  const doc = new GoogleSpreadsheet(sheetId, adcAuth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[3];
  await sheet.loadCells('B2:G3');

  const shipSales = [];
  for (let i = 1; i < 7; i++) {
    const { value: name } = sheet.getCell(1, i);
    const { value: sales } = sheet.getCell(2, i);
    shipSales.push({ name, sales });
  }

  const propertyId = nconf.get('googleAnalytics:propertyId');
  const analyticsDataClient = new BetaAnalyticsDataClient();

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: nconf.get('googleAnalytics:startDate'),
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'customEvent:ship',
      },
    ],
    metrics: [
      {
        name: 'eventCount',
      },
    ],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        stringFilter: {
          matchType: 'EXACT',
          value: 'download',
        },
      },
    },
  });

  return {
    shipSales: _.orderBy(shipSales, 'sales', ['desc']),
    shipDownloads: _(response.rows)
      .map((row) => ({
        name: row.dimensionValues[0].value,
        downloads: +row.metricValues[0].value,
      }))
      .orderBy('downloads', ['desc'])
      .value(),
  };
}

const shipTypes = [
  { id: 'miner', name: 'Miner', label: 'Miners' },
  { id: 'surface-miner', name: 'Surface Miner', label: 'Surface Miners' },
  { id: 'starter', name: 'Starter Ship', label: 'Starter Ships' },
  {
    id: 'asteroid-hauler',
    name: 'Asteroid Hauler',
    label: 'Asteroid Haulers',
  },
  { id: 'hauler', name: 'Hauler', label: 'Haulers' },
  { id: 'salvager', name: 'Salvager', label: 'Salvagers' },
  { id: 'fighter', name: 'Fighter', label: 'Fighters' },
  { id: 'command-ship', name: 'Command Ship', label: 'Command Ships' },
  { id: 'transport', name: 'Transport', label: 'Transports' },
  { id: 'explorer', name: 'Explorer', label: 'Explorers' },
];

const similarTagsExclude = ['rando-shop'];

module.exports = async (data) => {
  const { shipSales, shipDownloads } = await runReport();
  const { ships } = data;

  let popularSale = [];
  if (!_.isEmpty(shipSales)) {
    const highest = _.first(shipSales).sales;
    popularSale = _(shipSales)
      .filter(({ sales }) => sales > 0.8 * highest)
      .map('name')
      .value();
  }

  let popularFree = [];
  if (!_.isEmpty(shipDownloads)) {
    const highest = _.first(shipDownloads).downloads;
    popularFree = _(shipDownloads)
      .filter(({ downloads }) => downloads > 0.8 * highest)
      .map('name')
      .value();
  }

  const popular = _.concat(popularSale, popularFree);

  _.each(ships, (ship) => {
    ship.popular ??= _.includes(popular, ship.name);
    ship.premium = _.find(ships, { path: `${ship.path}/premium` });
    ship.similar = _(ships)
      .reject({ path: ship.path })
      .orderBy(
        (otherShip) => {
          const weight =
            (_.includes(ship.name, otherShip.name) ||
              _.includes(otherShip.name, ship.name)) * 20;
          otherShip.weight =
            weight +
            _.intersectionBy(ship.types, otherShip.types, 'type').length * 8 +
            _.intersectionWith(
              ship.tags,
              _.reject(otherShip.tags, ({ id }) =>
                _.includes(similarTagsExclude, id)
              ),
              _.isEqual
            ).length;
          return otherShip.weight;
        },
        ['desc']
      )
      .reject(({ weight }) => weight < 8)
      .slice(0, 4)
      .value();
  });

  return {
    list: ships,
    search: _.map(ships, (ship) =>
      _.pick(ship, [
        'name',
        'types',
        'saleType',
        'version',
        'slug',
        'tags',
        'new',
        'updated',
        'popular',
        'webPath',
      ])
    ),
    types: { list: shipTypes, byId: _.keyBy(shipTypes, 'id') },
    tags: {
      list: _(ships)
        .map('tags')
        .flatten()
        .uniqBy('id')
        .orderBy('label')
        .value(),
    },
    downloads: {
      current: _(ships)
        .filter(({ blueprints }) => !_.isEmpty(blueprints))
        .map(({ blueprints, name, photos, shortDescription, slug }) => {
          const current = _.find(blueprints, { current: true });
          current.ship = { name, photos, shortDescription, slug };
          return current;
        })
        .value(),
      count: {
        list: shipDownloads,
        byShip: _.keyBy(shipDownloads, 'name'),
      },
    },
    bySaleType: _.groupBy(ships, 'saleType'),
    byType: _(shipTypes)
      .keyBy('id')
      .mapValues(({ id }) =>
        _(ships)
          .filter(({ types }) => _.find(types, { type: id }))
          .orderBy(({ types }) => _.find(types, { type: id }).order)
      )
      .value(),
  };
};
