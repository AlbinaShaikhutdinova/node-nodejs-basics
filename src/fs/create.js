import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const create = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const errMessage = 'FS operation failed';
  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, 'I am fresh and young', (err) => {
      if (err) throw err;
      console.log('FS operation success');
    });
  } else {
    throw errMessage;
  }
};

await create();
