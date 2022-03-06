/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    const myMap = new Map();
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(!myMap.has(s[i]))
            myMap.set(s[i],i);
        else{
            i = myMap.get(s[i]);
            myMap.clear();
        }
        if(maxLength < myMap.size)
            maxLength = myMap.size;
    }
    return maxLength;
};