const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  arr = [];
  push(element) {
    let buff = [];
    buff = this.arr;
    this.arr = [];
    this.arr[0] = element;
    this.arr = this.arr.concat(buff);
    return this
  }

  pop() {
    let first = this.arr[0];
    this.arr = this.arr.slice(1,this.arr.length);
    return first;
  }

  peek() {
    return this.arr[0];
  }
}

module.exports = {
  Stack
};
