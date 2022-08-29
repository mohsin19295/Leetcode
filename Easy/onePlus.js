// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i] += 1;
      return digits; // If digits[i] !==9, program will return from here by adding one to the last element
    }
  }
  digits.unshift(1);
  return digits; // Else it will unshift(1) and all elements that are equal to 9 will be 0 bcoz we have been reassigned with 0
};

console.log(plusOne([9,9,9]))
console.log(plusOne([9,9,1]))
console.log(plusOne([8,9,9]))
console.log(plusOne([8,6,0]))