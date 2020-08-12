class DataConverter {
  static splitLineBreakToArray(data) {
    return data.split('\n').map((data) => data.replace('\r', ''));
  }

  static splitCommaToArray(data) {
    return data.split(',');
  }

  static splitSpaceToArray(data) {
    return data.split(' ');
  }

  static joinArrayToText(data) {
    return data.join(' ');
  }
}

module.exports = DataConverter;