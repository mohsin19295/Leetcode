// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

var minOperations = function (s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[0] == 1) {
      if (i % 2 === 1 && s[i] == 1) count++;
      if (i % 2 === 0 && s[i] == 0) count++;
    } else {
      if (i % 2 === 1 && s[i] == 0) count++;
      if (i % 2 === 0 && s[i] == 1) count++;
    }
  }
  return Math.min(count, s.length - count);
};

console.log(minOperations("10010100"));
console.log(minOperations("1111"));
console.log(minOperations("0100"));
