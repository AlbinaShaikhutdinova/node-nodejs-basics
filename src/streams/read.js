import fs from 'fs';
import path from 'path';
import url from 'url';
const read = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = fs.createReadStream(filePath, 'utf-8');

  let data = '';

  stream.on('data', (chunk) => (data += chunk));
  stream.on('end', () => process.stdout.write(data));
  stream.on('error', (error) => console.log('Error', error.message));
};

await read();
