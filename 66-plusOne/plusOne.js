/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = BigInt(digits.join(''));
    number += BigInt(1);
    return number.toString().split('');
};