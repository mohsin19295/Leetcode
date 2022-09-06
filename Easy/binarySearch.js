// https://leetcode.com/problems/binary-search/

var search = function (nums, target) {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));