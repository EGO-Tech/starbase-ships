import nconf from 'nconf';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

nconf
  .overrides({
    basePath: dirname(fileURLToPath(import.meta.url)),
  })
  .argv()
  .env()
  .file({ file: 'config.json' });
