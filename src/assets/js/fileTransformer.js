const path = require('path');

module.exports = {
  process(filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};