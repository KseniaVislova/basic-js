const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  console.log(n)
  let res = String(n).split('').map(item => parseInt(item)).reduce((a, b) => a + b);
  console.log("Res: ", res)
  if (res > 9) {
    return getSumOfDigits(res);
  } else {
    return res;
  }
}

//node ./src/sum-digits.js
//npm run test ./test/sum-digits.test.js

module.exports = {
  getSumOfDigits
};
