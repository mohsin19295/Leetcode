// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  if (s.length !== t.length) return false;

  let res = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      res = false;
      break;
    }
  }
  return res;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));