const Name = require('./Name');
const DataConverter = require('./DataConverter');
const NameCollection = require('./NameCollection');
const Printer = require('./Printer');
const DataGetter = require('./DataGetter');
const NameSortener = require('./NameSortener');

const data = DataGetter.getDataFromTxtFile(process.argv[2]);
var names = [];

data.forEach(element => {
  splittedElement = DataConverter.splitSpaceToArray(element);
  firstName = splittedElement[0];
  middleName = null;
  lastName = splittedElement[splittedElement.length - 1];
  if (Name.isMiddleName(splittedElement)) {
    middleName = (Name.isMiddleNameMoreThanOne(splittedMiddlename = splittedElement.slice(1, -1))) ? Name.joinMiddleName(splittedMiddlename) : splittedElement[1];
    names.push(new Name(firstName, middleName, lastName));
  } else {
    names.push(new Name(firstName, middleName, lastName));
  }
});

nameCollection = new NameCollection(names);
nameCollection.names = NameSortener.sortByLastName(nameCollection.names);

Printer.printNamesToScreen(nameCollection.names);
Printer.printNamesToTxtFile(nameCollection.names);