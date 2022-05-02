const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};
  let res = [];

  for (let i = 0; i < names.length; i++) {
    console.log(i, obj.hasOwnProperty(obj[names[i]]))
    if (obj.hasOwnProperty(obj[names[i]])) {

    }

    if (obj[names[i]]) {
      let value = obj[names[i]];
      obj[`${names[i]}(${value})`] += 1;
    } else {
      obj[names[i]] = 1;
    }
    console.log(obj)
  }

  console.log(obj)
  return res;
}

//node ./src/file-names.js
//npm run test ./test/file-names.test.js

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))

module.exports = {
  renameFiles
};
