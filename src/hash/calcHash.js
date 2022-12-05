import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import url from 'url';

const calculateHash = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const hashSum = crypto.createHash('sha256');
    hashSum.update(data);
    const hex = hashSum.digest('hex');
    console.log(hex);
  });
};

await calculateHash();
