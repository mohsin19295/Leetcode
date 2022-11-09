// https://leetcode.com/problems/sort-colors/

var sortColors = function (nums) {
  // Dutch National Flag Algorithm
  let [low, mid, high] = [0, 0, nums.length - 1];

  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++, mid++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        [nums[high], nums[mid]] = [nums[mid], nums[high]];
        high--;
    }
  }
  return nums;
};


console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
