let ar = [3,4,-1,1,2,34456]
function firstMissingPositive(nums: number[]): number {
    let flag = false
    let target = 1
    let hash: {[key: number]:boolean} = {}
    for(let i=0;i<nums.length;i++){
        hash[nums[i]] = true
    }

    while(true){
        flag = hash.hasOwnProperty(target)
        if(flag == true){
            target++
        }else{
            return target
        }
        
    }

    return -1
};

console.log(firstMissingPositive(ar))