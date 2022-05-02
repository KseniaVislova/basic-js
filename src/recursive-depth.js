const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let max = count;

    
    const calculate = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        count += 1;
        console.log("Итерация: ", i);
        console.log("Count вначале", count);
        if (Array.isArray(arr[i])) {
          calculate(arr[i]);
        } else {
          console.log("Count вконце", count);
          if (count > max) max = count;
          count = 0;
        }
      }
    }
    calculate(arr);
    return max; 
  }
}


const calc = new DepthCalculator();
console.log(calc.calculateDepth([1, 2, 3, 4, 5, [1]]))
console.log(calc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]))

//node ./src/recursive-depth.js
//npm ./test/recursive-depth.test.js

module.exports = {
  DepthCalculator
};
