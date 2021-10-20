/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let num = 0;
    for(let i = 0; i < columnTitle.length; i++){
        let letter = columnTitle[columnTitle.length - 1 - i];
        num += 26**i * (letter.charCodeAt(0) - 64);
    }
    return num;
};