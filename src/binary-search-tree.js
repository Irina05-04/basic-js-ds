const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  //parent = new Node;
  constructor(){
    this.parent = null;
    
  }
  
  root() {
    if(this.parent) return this.parent;
    else return null;
  }

  add(value) {
    let newNode = new Node(value);
    if(!this.parent){
      this.parent = newNode;
    }
    else{
      this.addNode(this.parent, newNode);
    }
  }
  addNode(node, newNode){
    if(newNode.data == node.data){
      
    } else
    if(newNode.data < node.data){
      if(!node.left){
        node.left = newNode;
      }
      else{
        this.addNode(node.left,newNode)
      }
    }
    else{
      if(!node.right){
        node.right = newNode;
      }
      else{
        this.addNode(node.right,newNode)
      }
    }
    return node;
  }
  has(value) {
    let currentNode = this.parent;
    while(currentNode){
      if(currentNode.data == value) return true;
      else{
        if(currentNode.data > value){
          currentNode = currentNode.left;
        }
        else{
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  find(value) {
    let currentNode = this.parent;
    while(currentNode){
      if(currentNode.data == value) return currentNode;
      else{
        if(currentNode.data > value){
          currentNode = currentNode.left;
        }
        else{
          currentNode = currentNode.right;
        }
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min(){
    if(!this.parent) return null;
    let node = this.parent;
    while(node.left != null){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.parent) return null;
    let node = this.parent;
    while(node.right != null){
      node = node.right;
    }
    return node.data;
}
}
module.exports = {
  BinarySearchTree
};