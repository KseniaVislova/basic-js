const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let current = [...arr];
    current.splice(i, 1);
    res.push(parseInt(current.join('')));
  }

  res = res.sort((a, b) => {
    return a - b;
  });

  return res[res.length - 1];
}

//node ./src/delete-digit.js
//npm run test ./test/delete-digit.test.js

module.exports = {
  deleteDigit
};
