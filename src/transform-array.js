const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '--discard-next') {
      if (arr[i + 1] !== undefined) {
        console.log('--discard-next')
        i += 2;
        
        newArr.push(arr[i]);
      }
    } else if(arr[i] === '--discard-prev') {
      if (arr[i - 1] !== undefined) {
        console.log('--discard-prev')
        newArr.unshift(arr[i - 1]);
      }
    } else if(arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        console.log('--double-next')
        newArr.push(arr[i + 1]);
        newArr.push(arr[i + 1]);
      }
    } else if(arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined) {
        console.log('--double-prev')
        if (arr[i - 1] !== '--discard-next' || arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        }
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
console.log('------------- 1 -------------')
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))

console.log('------------- 2 -------------')
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))

console.log('------------- 3 -------------')
console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))

console.log('------------- 4 -------------')
console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))

//npm run test ./test/transform-array.test.js
//node ./src/transform-array.js

module.exports = {
  transform
};
