import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const read = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const errMessage = 'FS operation failed';
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) throw errMessage;
      console.log(data);
    });
  } else {
    throw errMessage;
  }
};

await read();
