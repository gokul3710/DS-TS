function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let count = 0;

    for(let i :number=0;i<nums.length;i++){

        if(nums[i] == k){
            count++;
        }

    }

    if(count<2){
        return false;
    }

    return true;

};