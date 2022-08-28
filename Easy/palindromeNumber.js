var isPalindrome = function (x) {
  x = x.toString();

  /*
  ! Linear Search
  let res = [];
  for (let i = x.length - 1; i >= 0; i--) res.push(x[i]);
  if (res.join('') === x) return true;
  return false;
*/

  let left = 0,
    right = x.length - 1;
  while (left < right) {
    if (x[left] !== x[right]) return false;
    left++, right--;
  }
  return true;
};

console.log(isPalindrome(111));
console.log(isPalindrome(5));
console.log(isPalindrome(55628));