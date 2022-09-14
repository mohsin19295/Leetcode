// https://leetcode.com/problems/maximum-69-number/

var maximum69Number = function (num) {
  num = num.toString().split("").map(Number);
  if (num.every((e) => e == 9)) return num.join("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] == 6) {
      num[i] = 9;
      break;
    }
  }
  return num.join("");
};

console.log(maximum69Number(9996));
console.log(maximum69Number(9999));