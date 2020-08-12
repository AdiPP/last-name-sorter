const DataConverter = require('./DataConverter');

class NameSortener {
  static sortByLastName(data) {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = i + 0; j < data.length; j++) {
        if (this.isSame(data[i].lastName, data[j].lastName)) {
          if (this.isSame(data[i].firstName, data[j].firstName)) {
            // Sorting by middlename
            data = this.sortByMiddleName(data, i, j);
          } else {
            // Sorting by firstname
            data = this.sortByFirstName(data, i, j);
          }
        } else {
          // Sorting by lastname
          if (this.compareName(data[i].lastName, data[j].lastName)) {
            data = this.swapName(data, i, j);
          }
        }
      }
    }

    return data;
  }

  static sortByMiddleName(data, i, j) {
    if (DataConverter.splitSpaceToArray(data[i].middleName).length > 1 && DataConverter.splitSpaceToArray(data[j].middleName).length > 1) {
      var smallestMiddleNameLength = this.smallestMiddleNameLength(data[i].middleName, data[j].middleName);
      for (let k = 0; k < smallestMiddleNameLength; k++) {
        if (this.compareName(DataConverter.splitSpaceToArray(data[i].middleName)[k], DataConverter.splitSpaceToArray(data[j].middleName)[k])) {
          data = this.swapName(data, i, j);
        }
      } 
    } else {
      if (this.compareName(data[i].middleName, data[j].middleName)) {
        data = this.swapName(data, i, j);
      }
    }
    return data;
  }

  static sortByFirstName(data, i, j) {
    if (this.compareName(data[i].firstName, data[j].firstName)) {
      data = this.swapName(data, i, j);
    }
    return data;
  }

  static compareName(name1, name2) {
    if (name1 > name2) {
      return true;
    }
    return false;
  }

  static swapName(data, i, j) {
    var temp;
    temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    return data;
  }

  static isSame(name1, name2) {
    if (name1 == name2) {
      return true;
    }
    return false;
  }

  static smallestMiddleNameLength(name1, name2) {
    var smallestMiddleNameLength = (DataConverter.splitSpaceToArray(name1).length < DataConverter.splitSpaceToArray(name2).length) ? DataConverter.splitSpaceToArray(name1).length : DataConverter.splitSpaceToArray(name2).length;
    return smallestMiddleNameLength;
  }
}

module.exports = NameSortener;