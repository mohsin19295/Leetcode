// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

var divisorSubstrings = function (num, k) {
  num = num.toString();
  let i = 0;
  let count = 0;
  while (i <= num.length - k) {
    let res = "";
    for (j = i; j < k + i; j++) {
      res += +num[j];
    }
    i++;
    if (num % res == 0) {
      count++;
    }
  }
  return count;
};

console.log(divisorSubstrings(240, 2))
console.log(divisorSubstrings(430043, 2));