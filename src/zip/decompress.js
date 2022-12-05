import fs from 'fs';
import path from 'path';
import url from 'url';
import zlib from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const newFilePath = path.join(__dirname, 'files', 'archive.gz');
  const input = fs.createReadStream(newFilePath);
  const output = fs.createWriteStream(filePath);
  const gzip = zlib.createUnzip();

  pipeline(input, gzip, output, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await decompress();
