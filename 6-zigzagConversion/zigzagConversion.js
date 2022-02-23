/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length===1 || numRows === 1 ) return s;
    let result = new Array(numRows).fill('');
    let moveUpOrDown = true;
    let currRow = 0;
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(currRow === numRows-1 || currRow === 0)
            moveUpOrDown = !moveUpOrDown;

        if(moveUpOrDown === false){
            result[currRow] = result[currRow] + s[i];
            currRow++;
        }
        if(moveUpOrDown === true){
            result[currRow] = result[currRow] + s[i];
            currRow--;
        }
    }
    return result.join('');
};