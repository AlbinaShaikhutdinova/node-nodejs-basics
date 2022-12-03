import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const rename = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = path.join(__dirname, 'files', 'properFilename.md');
  const errMessage = 'FS operation failed';
  if (!fs.existsSync(newFilePath) && fs.existsSync(filePath)) {
    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        throw errMessage;
      }
    });
  } else {
    throw errMessage;
  }
};

await rename();
