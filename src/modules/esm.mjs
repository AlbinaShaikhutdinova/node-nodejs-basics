import path from 'path';
import url from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';

import './files/c.js';

const random = Math.random();
const require = createRequire(import.meta.url);
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let unknownObject;

if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});
