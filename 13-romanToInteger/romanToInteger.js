const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};


let romanToInt = function(s) {
    let value = 0;
    s = s.split('').map(elem => roman[elem]);

    s.forEach((currValue, index) => {
        if(index == 0 ) {
            value = value + currValue;
            return;
        }
        if( s[index - 1] < currValue) {
            value = value + currValue - (2*s[index-1])
            return;
        }
        else {
            value = value + currValue;
            return;
        }
    });
    return value;
}