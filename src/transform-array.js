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
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === --discard-next) {
      i += 2;
      newArr.push(arr[i]);
    }
    if(arr[i] === --discard-prev) {
      newArr.unshift(arr[i - 1]);
    }
    if(arr[i] === --double-next) {
      newArr.push(arr[i + 1]);
      newArr.push(arr[i + 1]);
    }
    if(arr[i] === --double-prev) {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

//npm run test ./test/transform-array.test.js
//node ./src/transform-array.js

module.exports = {
  transform
};
