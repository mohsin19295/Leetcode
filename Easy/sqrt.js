// https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
  if (x < 2) return x;
  //   let [left, right] = [0, x];
  let [left, right] = [1, Math.floor(x / 2)]; // Assigning 1 and Math.floor(x / 2) value in left and right variable will decrease the searching iteration, otherwise 0 and x is also fine.

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const sqrt = mid * mid;

    if (sqrt === x) return mid;
    if (sqrt > x) right = mid - 1;
    else left = mid + 1;
  }
  return right;
};

console.log(mySqrt(9));
console.log(mySqrt(8));
console.log(mySqrt(124));
