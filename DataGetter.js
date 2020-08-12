const DataConverter = require('./DataConverter');
const fs = require('fs');

class DataGetter {
  static getDataFromTxtFile(filepath) {
    if (fs.existsSync(filepath)) {
      return DataConverter.splitLineBreakToArray(fs.readFileSync(filepath, 'utf8'));
    }
    return false;
  }
}

module.exports = DataGetter;