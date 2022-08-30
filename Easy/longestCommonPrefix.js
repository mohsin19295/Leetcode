// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  // Creating a function wich takes two arguments as a parameters and comparing both if they have same characters or not. If they have, simply putting in res variable and finally returning res. Else returning from where they don't match.
  const comparewithTwoStr = (str1, str2) => {
    let n1 = str1.length,
      n2 = str2.length;
    let res = "";

    for (let i = 0; i < Math.min(n1, n2); i++) {
      if (str1[i] != str2[i]) return res;
      res += str1[i];
    }
    return res;
  };

  // Storing first element in prefix variable and comparing with next element through a loop and at the same time re-assigning prefix value to comparable value.
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = comparewithTwoStr(prefix, strs[i]);
  }
  return prefix; // Finally, returning prefix
};

console.log(longestCommonPrefix(["fluw", "floy", "fij"]));
console.log(longestCommonPrefix(["mas", "masi", "masaischool"]));
