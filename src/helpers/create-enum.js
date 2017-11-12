const Enum = require('enum');

module.exports = (app, path, ...args) => {
  const newEnum = new Enum(...args);
  const enums = app.get('enums');
  
  enums[path] = newEnum;
  
  const values = newEnum.enums.map(e => e.value.toString());
  
  return values;
};