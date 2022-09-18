// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/

var checkOnesSegment = function (s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] == "1" && s[i - 1] == "0") return false;
  }
  return true;
};

console.log(checkOnesSegment('1001'));
console.log(checkOnesSegment('110'));