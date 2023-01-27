function longestCommonPrefix(strs: string[]): string {
    let b: number = 1
    let a: string = "";
    if(strs.length == 1){
        return strs[0]
    }
    for (let i: number = 0; i < strs[0].length; i++) {
        for (let j: number = 0; j < strs.length; j++) {
            if (strs[j] == "") {
                return ""
            }
            if (strs[j][i] !== strs[0][i]) {
                return `${a}`
            }
        }
        a = strs[0].slice(0, b)
        b++;
    }
    return `${a}`
};

console.log(longestCommonPrefix(["ower", "ower", "ower"]))