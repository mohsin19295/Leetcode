// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function (num) {
  const sorted = num
    .toString()
    .split("")
    .sort((a, b) => a - b);
  const edge = sorted[0] + sorted[3];
  const center = sorted[1] + sorted[2];

  return +edge + +center;
};


console.log(minimumSum(2932))
console.log(minimumSum(4009))