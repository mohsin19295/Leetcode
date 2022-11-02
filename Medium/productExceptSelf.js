// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  const res = [];
  let multiplier = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = multiplier;
    multiplier *= nums[i];
  }

  multiplier = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= multiplier;
    multiplier *= nums[i];
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));