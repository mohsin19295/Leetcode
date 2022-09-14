// https://leetcode.com/problems/count-of-matches-in-tournament/

var numberOfMatches = function (n) {
  let sum = 0;
  // Each time teams will be divided into two half depend on odd or even then it will depend on the 'advance teams' for dividing into two half. So in starting we initialized it's first half i.e. Matches. And inside the while loop we check the rest matches depending on the 'advance teams'.
  let firstDivision = Math.floor(n / 2);
  while (n > 1) {
    n = n % 2 == 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1; // teams advance
    let matches = Math.floor(n / 2); // Matches
    sum += matches;
  }
  return sum + firstDivision;
};

console.log(numberOfMatches(7))
console.log(numberOfMatches(14))
