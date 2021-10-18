/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // console.log(columnNumber.toString().length);
    let resultString = '';
    while(columnNumber > 0){
        let rem = columnNumber % 26;
        columnNumber = (columnNumber - rem) /26;
        if(rem === 0 ){
            resultString = String.fromCharCode(26+64) + resultString;
            columnNumber -= 1;
        }
        else
            resultString = String.fromCharCode(rem+64) + resultString;
    }
    return resultString;
};