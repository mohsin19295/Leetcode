// https://leetcode.com/problems/excel-sheet-column-number/

var titleToNumber = function (columnTitle) {
    let [sum, value] = [0, 0];
    for (let i = 0; i < columnTitle.length; i++) {
        value = columnTitle.charCodeAt(i) - 64;
        sum = sum * 26 + value;
    }
    return sum;
}

console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))