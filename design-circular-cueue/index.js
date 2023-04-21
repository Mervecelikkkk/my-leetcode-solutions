class MyCircularQueue {
    constructor(k) {
      this.head = -1; // index of the front element
      this.tail = -1; // index of the last element
      this.size = 0; // current number of elements
      this.maxSize = k; // maximum size of the queue
      this.buffer = new Array(k); // internal buffer to hold the elements
    }
  
    enQueue(value) {
      if (this.isFull()) { // if queue is full, return false
        return false;
      }
  
      if (this.isEmpty()) { // if queue is empty, set head index to 0
        this.head = 0;
      }
  
      // update the tail index by circularly incrementing it
      this.tail = (this.tail + 1) % this.maxSize;
      this.buffer[this.tail] = value; // store the new element in the buffer
      this.size++; // increment the size of the queue
  
      return true; // return true to indicate successful enqueue
    }
  
    deQueue() {
      if (this.isEmpty()) { // if queue is empty, return false
        return false;
      }
  
      if (this.head === this.tail) { // if there's only one element in the queue
        this.head = -1; // reset head index
        this.tail = -1; // reset tail index
      } else {
        // update the head index by circularly incrementing it
        this.head = (this.head + 1) % this.maxSize;
      }
  
      this.size--; // decrement the size of the queue
  
      return true; // return true to indicate successful dequeue
    }
  
    Front() {
      if (this.isEmpty()) { // if queue is empty, return -1
        return -1;
      }
  
      return this.buffer[this.head]; // return the first element in the queue
    }
  
    Rear() {
      if (this.isEmpty()) { // if queue is empty, return -1
        return -1;
      }
  
      return this.buffer[this.tail]; // return the last element in the queue
    }
  
    isEmpty() {
      return this.size === 0; // check if the size of the queue is 0
    }
  
    isFull() {
      return this.size === this.maxSize; // check if the size of the queue is equal to the maximum size
    }
  }
  