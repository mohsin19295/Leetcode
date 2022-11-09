// https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  x = x.toString();
  let res = "";

  if (x[0] == "-") {
    for (let i = x.length - 1; i > 0; i--) {
      res += x[i];
    }
    res = -res;
  } else {
    for (let i = x.length - 1; i >= 0; i--) {
      res += x[i];
    }
    res = +res;
  }
  if (!(res >= (-2) ** 31 && res <= 2 ** 31 - 1)) {
    return 0;
  }
  return res;
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))