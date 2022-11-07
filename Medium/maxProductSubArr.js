// https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function(nums) {
  let [preMin, preMax, res] = [nums[0], nums[0], nums[0]];
    
    for (let i = 1; i<nums.length; i++){
        let curMax = Math.max(preMin*nums[i], preMax*nums[i], nums[i]);
        let curMin = Math.min(preMin*nums[i], preMax*nums[i], nums[i]);
        
        res = Math.max(curMax, res);
        preMin = curMin;
        preMax = curMax;
    }
    return res;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));