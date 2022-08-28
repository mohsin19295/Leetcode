// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  /*
  ! Broute force Aproach --> O(n**2), S.C -> O(1)
for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i]+ nums[j] === target) return [i, j]
        }
    }
*/

// ! Oprimize solution --> O(n), S.C -> O(n)
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) return [obj[target - nums[i]], i];

    obj[nums[i]] = i;
  }
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 0, 19, 7, 11, 15], 15));