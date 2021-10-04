/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    let i,j;
    let myArray = new Array(numRows);
    for(i = 0; i < numRows; i++)
        myArray[i] = new Array(i+1);

    for(i = 0; i < numRows; i++) {
        for(j = 0; j <= i; j++) {
            if(j==0 || j == i)
            myArray[i][j] = 1;
            else
            myArray[i][j] = myArray[i-1][j] + myArray[i-1][j-1];  
        }
    }
    return myArray;
};