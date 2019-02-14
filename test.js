const expect = require('chai').expect;
const flattenArray = require('./playground');
const mdArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10];
const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mdArray1Level = [1, 2, 3, [4, 5, 6, 7, 8, 9], 10];

it('should flatten an array with one level of nesting', function(){
  expect(flattenArray(mdArray1Level)).to.be.eql(expectedResult);
})

it('should return an array', function(){
  expect(flattenArray([])).to.be.an('array');
})

it('if given bad input, return error message', function(){
  expect(flattenArray()).to.throw(Error, 'bad input!');
})