const _ = require('lodash');

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

module.exports = ({ ships }) => {
  return {
    list: ships,
    types: { list: shipTypes, byId: _.keyBy(shipTypes, 'id') },
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
