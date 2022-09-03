// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function (seats, students) {
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < seats.length; i++) {
    sum += Math.abs(seats[i] - students[i]);
  }
  return sum;
};


console.log(minMovesToSeat([3, 1, 5], [2, 4, 7]));
console.log(minMovesToSeat([4,1,5,9], [1,3,2,6]));