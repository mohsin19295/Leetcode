// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  s = s.split(" ");
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i].length !== 0) return s[i].length;
  }
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));