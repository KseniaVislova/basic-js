const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.filter(item => item !== -1).sort((a, b) => a - b);

  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = result[index];
      index += 1;
    }
  }

  return arr;
}

//node ./src/sort-by-height.js
//npm run test ./test/sort-by-height.test.js

module.exports = {
  sortByHeight
};
