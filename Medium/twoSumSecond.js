// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([5, 25, 75], 100));
