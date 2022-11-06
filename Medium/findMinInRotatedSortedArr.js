// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];

  if (nums[left] <= nums[right]) return nums[0];

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[mid - 1]) return nums[mid];
    else if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    else if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};  

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));