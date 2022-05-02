const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value = `( ${value} )`;
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    let length = this.arr.length;
    if(isNaN(Number(position)) || length === 0 || position >= length || position <= 0) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    for (let i = 0; i < length; i++) {
      if (i + 1 === position) {
        this.arr.splice(i, 1);
        return this;
      }
    }
  },
  reverseChain() {
    const data = [];
    for (let i = this.arr.length - 1; i >= 0; i--) {
      data.push(this.arr[i])
    }
    this.arr = data;
    return this;
  },
  finishChain() {
    let data = this.arr.join('~~');
    this.arr = [];
    return data;
  }
};

module.exports = {
  chainMaker
};
