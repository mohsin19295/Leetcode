// https://leetcode.com/problems/excel-sheet-column-title/

var convertToTitle = function (columnNumber) {
  let arr = [];
  while (columnNumber > 0) {
    let reminder = columnNumber % 26;

    if (reminder == 0) {
      arr.push("Z");
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      arr.push(String.fromCharCode(reminder - 1 + "A".charCodeAt(0)));
      columnNumber = Math.floor(columnNumber / 26);
    }
  }
  return arr.reverse().join("");
};

console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))