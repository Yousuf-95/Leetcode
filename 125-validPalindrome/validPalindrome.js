/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseString = s.split('').reverse().join('');
    if(s === reverseString)
        return true;
    else
        return false;
};