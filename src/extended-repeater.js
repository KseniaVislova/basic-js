const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = '+';
  if (options.addition === undefined) options.addition = '';
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  let res = []

  for (let i = 0; i < options.repeatTimes; i++) {
    let additionStr = []

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      additionStr.push(String(options.addition))
    }

    additionStr = additionStr.join(options.additionSeparator)

    res.push(str + additionStr)
  }

  let separator = options.separator;

  return res.join(separator);
}

//node ./src/extended-repeater.js
//npm run test ./test/extended-repeater.test.js

module.exports = {
  repeater
};
