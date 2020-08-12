const NameSortener = require('../NameSortener');
const Name = require('../Name');
const DataGetter = require('../DataGetter');

var assert = require('assert');

describe('NameSortener', function() {
  // sortByLastName()
  // sortByMiddleName()
  // sortByFirstName()
  describe('compareName()', function() {
    it('should return true when the name1 is more bigger than name2', function() {
      assert.equal(NameSortener.compareName('Putra', 'Adi'), true);
    })
    it('should return false when the name1 is more small than name2', function() {
      assert.equal(NameSortener.compareName('Adi', 'Putra'), false);
    })
  })
  // swapName()
  describe('isSame()', function() {
    it('should return true when the data is same', function() {
      assert.equal(NameSortener.isSame('Adi', 'Adi'), true);
    })
    it('should return false when the data is not same', function() {
      assert.equal(NameSortener.isSame('Adi', 'Putra'), false);
    })
  })
  // smallestMiddleNameLength
})

describe('Name', function() {
  describe('isMiddleName()', function() {
    it('should return true if data length more than 2', function() {
      assert.equal(Name.isMiddleName([1, 2, 3]), true)
    })
    it('should return false if data length less than equal 2', function() {
      assert.equal(Name.isMiddleName([1, 2]), false)
    })
  })
  describe('isMiddleNameMoreThanOne()', function() {
    it('should return true if data length more than 1', function() {
      assert.equal(Name.isMiddleNameMoreThanOne([1, 2]), true);
    })
    it('should return false if data length less than equal 1', function() {
      assert.equal(Name.isMiddleNameMoreThanOne([1]), false);
    })
  })
  // joinMiddleName()
})

describe('DataGetter', () => {
  describe('getDataFromTxtFile()', () => {
    it('should return false if file doesnt exist', () => {
      assert.equal(DataGetter.getDataFromTxtFile('./abcd'), false);
    })
  })
})

