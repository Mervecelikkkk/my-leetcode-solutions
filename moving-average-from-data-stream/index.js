
/**
 * @param {number} size
 */
class MovingAverage {
    constructor(size) {
      this.size = size;
      this.queue = [];
      this.sum = 0;
    }
  
    next(val) {
      this.queue.push(val);
      this.sum += val;
      
      if (this.queue.length > this.size) {
        this.sum -= this.queue.shift();
      }
      
      return this.sum / this.queue.length;
    }
  }
  
  /** 
   * Your MovingAverage object will be instantiated and called as such:
   * var obj = new MovingAverage(size)
   * var param_1 = obj.next(val)
   */