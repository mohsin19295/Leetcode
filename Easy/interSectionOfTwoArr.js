// https://leetcode.com/problems/intersection-of-two-arrays/


// T.C:- O(N**2) S.C: O(N)
var intersection = function (nums1, nums2) {
  const findUnique = (nums1) => {
    let data = {};
    for (let i = 0; i < nums1.length; i++) {
      let k = nums1[i];
      if (data[k]) {
        data[k] += 1;
      } else {
        data[k] = 1;
      }
    }
    return Object.keys(data);
  };

  nums1 = findUnique(nums1);
  nums2 = findUnique(nums2);
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i]);
      }
    }
  }
  return res;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));


// T.C:- O(N) S.C: O(N)
var intersection1 = function (nums1, nums2) {
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);

  nums1 = [...s1];
  nums2 = [...s2];

  return nums1.filter((c) => nums2.includes(c));
};
console.log(intersection1([4, 9, 5], [9, 4, 9, 8, 4]));