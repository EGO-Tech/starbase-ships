import nconf from 'nconf';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

nconf
  .overrides({
    basePath: dirname(fileURLToPath(import.meta.url)),
  })
  .argv()
  .env({ separator: '__' })
  .file('local', { file: 'config.local.json' })
  .file('default', { file: 'config.json' });
