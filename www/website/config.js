const nconf = require('nconf');

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

nconf
  .argv()
  .env({ separator: '__' })
  .file('local', { file: 'config.local.json' })
  .file('default', { file: 'config.json' });
