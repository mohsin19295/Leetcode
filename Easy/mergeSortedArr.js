// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  return nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));