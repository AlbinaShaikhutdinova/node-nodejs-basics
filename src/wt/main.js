import os from 'os';
import { Worker, isMainThread, parentPort } from 'worker_threads';
import path from 'path';
import url from 'url';
const performCalculations = async () => {
  const cpus = os.cpus();
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerPath = path.join(__dirname, 'worker.js');

  const resArray = [];
  const promises = [];
  cpus.forEach((cpu, index) => {
    const promise = new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData: { num: index + 10, id: index } });
      worker.on('message', ({ res, id }) => {
        resolve({ status: 'resolved', data: res });
      });
      worker.on('error', ({ res, id }) => {
        resolve({ status: 'error', data: null });
      });
    });
    promises.push(promise);
  });
  Promise.all(promises).then((result) => console.log(result));
};

await performCalculations();
