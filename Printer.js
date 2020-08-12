const fs = require('fs');

class Printer {
  static printNamesToScreen(data) {
    const result = data.map(element => element.fullName());
    console.log(result.toString().replace(/,/g, '\n'));
  }

  static printNamesToTxtFile(data) {
    const result = data.map(element => element.fullName());
    fs.writeFileSync('./sorted-names-list.txt', result.toString().replace(/,/g, '\n'))
  }  
}

module.exports = Printer;