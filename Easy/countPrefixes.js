// https://leetcode.com/problems/count-prefixes-of-a-given-string/

var countPrefixes = function (words, s) {
  let i = 0;
  let res = "";
  let count = 0;
  while (i < s.length) {
    res += s[i];
    for (j = 0; j < words.length; j++) {
      if (res == words[j]) {
        count++;
      }
    }
    i++;
  }
  return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
console.log(countPrefixes(["a", "a"], "aa"));