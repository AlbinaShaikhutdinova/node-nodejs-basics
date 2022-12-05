const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];
  args.forEach((arg, index) => {
    if (index % 2 === 0) {
      res.push(`${arg.replace('--', '')} is ${args[index + 1]}`);
    }
  });
  console.log(res.join(', '));
};

parseArgs();
