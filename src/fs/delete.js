import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const remove = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  const errMessage = 'FS operation failed';
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        throw errMessage;
      }
    });
  } else {
    throw errMessage;
  }
};

await remove();
