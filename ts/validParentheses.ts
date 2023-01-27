function isValid(s: string): boolean {

    if(s.length%2 != 0){
        return false
    } 

    let parenthesis: any = {
        "(": [true,"("],
        ")": [false,"("],
        "{" : [true,"{"],
        "}" : [false,"{"],
        "[" : [true,"["],
        "]" : [false,"["],
    }

    let flag = false

    for (let i: number = 0; i < s.length; i += 2) {

        if(s[i] == s[i+1]){
            return flag
        }

        if ( parenthesis[s[i]][0] == true  && parenthesis[s[i+1]][0]==false && parenthesis[s[i]][1] == parenthesis[s[i + 1]][1]) {
            console.log(s[i]);
            flag = true
        }
        else if( parenthesis[s[i]][0] == true && parenthesis[s[s.length-i-1]][0] == false && parenthesis[s[i]][1] == parenthesis[s[s.length-1-i]][1]){
            console.log(s[i]);
            
            flag = true
        }else{
            flag = false
        }

    }

    return flag;
};

console.log(isValid("(){}}{"));

