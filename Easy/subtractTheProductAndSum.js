// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function (n) {
  n = n.toString().split("").map(Number);
  let pro = n.reduce((a, c) => a * c, 1);
  let sum = n.reduce((a, c) => a + c, 0);

  return pro - sum;
};


console.log(subtractProductAndSum(234))
console.log(subtractProductAndSum(4421))