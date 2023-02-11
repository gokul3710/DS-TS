"use strict";
function containsNearbyDuplicate(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == k) {
            count++;
        }
    }
    if (count < 2) {
        return false;
    }
    return true;
}
;
