let isValid = function(s) {
    let stack = [];
    if(s.length === 1 || s.length > 10**4) return false;
    for(let i = 0; i < s.length; i++) {
        console.log(stack);
            switch(s[i]) {
				case '(': {
					if(s[i+1] == ')') {
						i++; continue;
					}
					else {
                        stack.push(s[i]);
                        continue;
                    }
				}	
				case '[': {
					if(s[i+1] == ']') {
						i++; continue;
					}
					else {
                        stack.push(s[i]);
                        continue;
                    }
				}	
				case '{': {
					if(s[i+1] == '}') {
						i++; continue;
					}
					else {
                        stack.push(s[i]);
                        continue;
                    }
				}	
                case ')': {
                    if(stack.pop() == '(') {
                        continue;
                    }
                    else return false;
                }
                case ']': {
                    if(stack.pop() == '[') {
                        continue;
                    }
                    else return false;
                }
                case '}': {
                    if(stack.pop() == '{') {
                        continue;
                    }
                    else return false;
                }
            }
        }
            if(stack.length === 0)
            return true;
            else return false;
};