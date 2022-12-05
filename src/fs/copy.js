import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const copy = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, 'files');
  const newDirPath = path.join(__dirname, 'files_copy');
  const errMessage = 'FS operation failed';
  if (!fs.existsSync(newDirPath)) {
    fs.cp(dirPath, newDirPath, { recursive: true }, (err) => {
      if (err) {
        console.error(errMessage);
      }
    });
  } else {
    throw errMessage;
  }
};

await copy();
