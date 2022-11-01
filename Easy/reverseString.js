// https://leetcode.com/problems/reverse-string/

var reverseString = function (s) {
  let [left, right] = [0, s.length - 1];

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));