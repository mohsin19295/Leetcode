// https://leetcode.com/problems/word-search/

var exist = function (board, word) {
  const search = (x, y, n) => {
    if (n == word.length) return true;

    if (
      x < 0 ||
      y < 0 ||
      x > board.length - 1 ||
      y > board[x].length - 1 ||
      board[x][y] != word[n]
    ) {
      return false;
    }

    board[x][y] = "#";

    let res =
      search(x + 1, y, n + 1) ||
      search(x - 1, y, n + 1) ||
      search(x, y + 1, n + 1) ||
      search(x, y - 1, n + 1);

    board[x][y] = word[n];

    return res;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (search(i, j, 0)) return true;
    }
  }
  return false;
};

console.log(
  exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ], "SEE")
);

console.log(
  exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ], "ABCB")
);