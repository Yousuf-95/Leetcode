/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let i,j;
    let myArray = new Array(rowIndex);
    for(i = 0; i <= rowIndex; i++)
        myArray[i] = new Array(i+1);

    for(i = 0; i <= rowIndex; i++) {
        for(j = 0; j <= i; j++) {
            if(j==0 || j == i)
            myArray[i][j] = 1;
            else
            myArray[i][j] = myArray[i-1][j] + myArray[i-1][j-1];  
        }
    }
    return myArray[rowIndex];
};