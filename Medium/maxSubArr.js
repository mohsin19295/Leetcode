// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let [sum, curSum] = [-Infinity, 0];

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];

    if (curSum > sum) {
      sum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([1]));