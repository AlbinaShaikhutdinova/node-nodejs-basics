import fs from 'fs';
import path from 'path';
import url from 'url';

const write = async () => {
  const { stdin, stdout } = process;
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const output = fs.createWriteStream(filePath);
  stdout.write('Write anything:\n');
  stdin.on('data', (data) => {
    output.write(data);
  });
};

await write();
