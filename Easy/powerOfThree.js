// https://leetcode.com/problems/power-of-three/

var isPowerOfThree = function (n) {
  if (n == 1) return true;
  while (n > 3) {
    n /= 3;
  }
  return n == 3;
};

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(10))
console.log(isPowerOfThree(3))