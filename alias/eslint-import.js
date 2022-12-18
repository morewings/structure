const createEslintImportAlias = (config) => {
  const {paths} = config;
  let result = [];
  Object.keys(paths).forEach(alias => {
    paths[alias].forEach(path => {
      result.push([alias, `./${path}`.slice(0, -1)]);
    });
  });
  return result;
};

module.exports = createEslintImportAlias;
