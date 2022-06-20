var removeDuplicates = function(nums) {
    let nums2 = 0;  
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[nums2] = nums[i];
            nums2++;
        }
    }
    return nums2;
};
