// https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  let data = {};
  for (let i = 0; i < nums.length; i++) {
    let k = nums[i];
    if (data[k])  data[k] += 1;
    else data[k] = 1;
  }
  for (key in data) {
    if (data[key] > nums.length / 2) return key;
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));