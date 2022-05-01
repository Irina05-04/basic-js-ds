const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }

  head = null;
  last = null;
  
  getUnderlyingList() {
    let arr = [];
    if(!this.head) return;
    arr[0] = this.head.value;
    while(this.head.next){
      arr.push(this.head.next.value);
      this.head = this.head.next;
    }
    var list = {};
    for(var i = arr.length; i >= 0; --i){
      if(i == arr.length - 1){
        let buff = {value: arr[i], next: null};
      list = buff;
      }else{
      let buff = {value: arr[i], next: list};
      list = buff;
      }
    }
    return list;
  }

  enqueue(value) {
    let buff = new Queue(value);
    if(!this.head){
      this.head = this.last = buff;
    }else{
    this.last.next = buff;
    this.last = buff;
    }
  }

  dequeue() {
    if(!this.head) return;
    let buff = this.head;
    this.head = this.head.next;
    if(!this.head){
      this.last = null
    }
    return buff.value;
  }
}


module.exports = {
  Queue
};
