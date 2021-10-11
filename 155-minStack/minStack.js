
var MinStack = function() {
    this.myArray = new Array();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.myArray.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.myArray.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let size = this.myArray.length;
    return this.myArray[size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Number.POSITIVE_INFINITY;
    for(let i = 0; i < this.myArray.length; i++){
        if(this.myArray[i] < min)
            min = this.myArray[i];
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */