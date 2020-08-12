const DataConverter = require('./DataConverter');

class Name {
  firstName;
  middleName;
  lastName;

  constructor(firstName = null, middleName = null, lastName = null) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  fullName() {
    return (this.middleName) ? this.firstName + ' ' + this.middleName + ' ' + this.lastName : this.firstName + ' ' + this.lastName;
  }

  static isMiddleName(data) {
    if (data.length > 2) {
      return true;
    }
    return false;
  }
  
  static isMiddleNameMoreThanOne(data) {
    if (data.length > 1) {
      return true;
    }
    return false;
  }
  
  static joinMiddleName(data) {
    return DataConverter.joinArrayToText(data);
  }
}

module.exports = Name;