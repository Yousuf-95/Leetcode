var isPalindrome = function(x) {
    reverseNum = x.toString().split('').reverse().join().replaceAll(',', '');
    return (reverseNum == x) ? true : false;
};