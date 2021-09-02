var reverse = function(x) {
    let digit = 0, reverseNum = 0;
    while(x) {
		digit = x % 10;
		reverseNum = (reverseNum * 10) + digit;
		x = (x/10)|0;
	}
	if( (reverseNum > (2**31 -1))  || (reverseNum < (-(2**31)))){
	 return 0;
	}
	return reverseNum;
};