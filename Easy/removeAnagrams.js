// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

var removeAnagrams = function (words) {
  let res = [];
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    arr[i] = anagram(words[i]);
    if (arr[i - 1] != arr[i]) {
      res.push(words[i]);
    }
  }
  return res;
};

function anagram(str) {
  return str.split("").sort().join("");
}

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
console.log(removeAnagrams(["a", "b", "c", "d", "e"]));