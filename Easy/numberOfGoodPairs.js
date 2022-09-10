// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        res.push([nums[i], nums[j]]);
      }
    }
  }
  return res.length;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1,1,1]));