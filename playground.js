// Take an array that's multidimensional and make it 
// non-multidimensional (aka flatten it)

function flattenArr(arr){
  const result = [];
  if (!arr) throw new Error('bad input!');
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(typeof element === 'object') {
      for (let j = 0; j < element.length; j++) {
        const innerElement = element[j];
        result.push(innerElement);
      }
    } else {
        result.push(element);
    }
  }
  return result;
}


const mdArray1Level = [
  1, 
  2, 
  3, 
  [4, 5, 6, 7, 8, 9],
  10
];

let flattened = flattenArr(mdArray1Level);

module.exports = flattenArr;