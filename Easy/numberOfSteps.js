// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function (num) {
  let count = 0;

  while (num > 0) {
    num % 2 === 0 ? (num = num / 2) : (num -= 1);
    count++;
  }
  return count;
};


console.log(numberOfSteps(14))
console.log(numberOfSteps(123))