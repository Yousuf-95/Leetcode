/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let number = n.toString(2);
    let zeroes = 32 - number.length;
    // console.log(zeroes);
    for(let i = 0; i < zeroes; i++){
        number = "0" + number;
    }
    // console.log(number.length);
    return parseInt(number.split('').reverse().join(''), 2);
};