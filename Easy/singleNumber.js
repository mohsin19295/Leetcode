// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  let data = {};
  for (let i = 0; i < nums.length; i++) {
    let k = nums[i];

    if (data[k]) data[k] += 1;
    else data[k] = 1;
  }

  for (key in data) {
    if (data[key] == 1) return key;
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
