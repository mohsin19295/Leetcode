// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (!haystack.includes(needle)) return -1;
    return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", 'sad'));
console.log(strStr("leetcode", "leeto"));