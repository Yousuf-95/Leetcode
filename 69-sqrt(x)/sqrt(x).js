/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 1) return 1;
    let i = 1;
    for(i; i*i <= x; i++);
    return parseInt(--i);
};