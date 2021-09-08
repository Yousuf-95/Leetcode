var longestCommonPrefix = function(strs) {
    
    if(strs.length === 0 || strs.length > 200 || (strs.length === 1 && strs[0] === ""))
    return "";
    if(strs.length === 1) return strs[0];
	
	let string1 = strs[0];
	let LCP = '';
	
	for(let i = 1; i<= string1.length; i++) {
		for(let j = 0; j < strs.length; j++) {
			// console.log(strs.length);
			if(strs[j].startsWith(string1.substr(0,i))) {
				continue;
			}
			else{
				return LCP;
			} 
		}
				LCP = string1.substr(0,i).toString();
	}
	return LCP;
};