// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  let data = {};
  for (let i = 0; i < s.length; i++) {
    let k = s[i];
    if (data[k]) data[k] += 1;
    else data[k] = 1;
  }
  for (key in data) {
    if (data[key] == 1) return s.indexOf(key);
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
