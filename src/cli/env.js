const parseEnv = () => {
  const env = process.env;
  const res = [];
  Object.keys(env).forEach((key) => {
    if (/^RSS_/.test(key)) {
      res.push(`${key}=${env[key]}`);
    }
  });
  console.log(res.join('; '));
};

parseEnv();
