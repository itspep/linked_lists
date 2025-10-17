// Node class
export class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  // LinkedList class
  export class LinkedList {
    constructor() {
      this.headNode = null; // start of the list
    }
  
    //append(value) - add to end
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
        return;
      }
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  
    //prepend(value) - add to start
    prepend(value) {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
  
    //size - total number of nodes
    size() {
      let count = 0;
      let current = this.headNode;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    //head - return first node
    head() {
      return this.headNode;
    }
  
    //tail - return last node
    tail() {
      if (!this.headNode) return null;
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    //at(index) - return node at specific index
    at(index) {
      let count = 0;
      let current = this.headNode;
      while (current) {
        if (count === index) return current;
        count++;
        current = current.nextNode;
      }
      return null;
    }
  
    //pop - remove last element
    pop() {
      if (!this.headNode) return null;
      if (!this.headNode.nextNode) {
        this.headNode = null;
        return;
      }
      let current = this.headNode;
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
  
    //contains(value) - check if value exists
    contains(value) {
      let current = this.headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    //find(value) - return index of value
    find(value) {
      let index = 0;
      let current = this.headNode;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    //toString - print formatted list
    toString() {
      let result = "";
      let current = this.headNode;
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      result += "null";
      return result;
    }
  

    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
      const prevNode = this.at(index - 1);
      if (!prevNode) return;
      const newNode = new Node(value, prevNode.nextNode);
      prevNode.nextNode = newNode;
    }
  
  
    removeAt(index) {
      if (index === 0 && this.headNode) {
        this.headNode = this.headNode.nextNode;
        return;
      }
      const prevNode = this.at(index - 1);
      if (!prevNode || !prevNode.nextNode) return;
      prevNode.nextNode = prevNode.nextNode.nextNode;
    }
  }
  