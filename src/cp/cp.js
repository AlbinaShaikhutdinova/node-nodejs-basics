import { spawn } from 'child_process';
import path from 'path';
import url from 'url';

const spawnChildProcess = async (args) => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'script.js');
  const child = spawn('node', [filePath]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess();
