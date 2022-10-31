// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  let sum = nums.reduce((a, c) => a + c, 0);

  let sumOfNaturalNumbers = 0;
  for (let i = 1; i <= nums.length; i++) {
    sumOfNaturalNumbers += i;
  }
  return sumOfNaturalNumbers - sum;
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));