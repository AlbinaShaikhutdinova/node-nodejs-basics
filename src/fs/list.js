import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const list = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, 'files');
  const errMessage = 'FS operation failed';
  if (fs.existsSync(dirPath)) {
    fs.readdir(dirPath, (err, files) => {
      if (err) throw errMessage;
      files.forEach((file) => {
        console.log(file);
      });
    });
  } else {
    throw errMessage;
  }
};

await list();
