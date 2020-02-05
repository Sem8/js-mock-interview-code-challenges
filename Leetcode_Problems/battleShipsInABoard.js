
// This is invalid. Revisit Leetcode later to even understand the problem: 
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            let column = row[j];
            if (board[0][j] == 'X') {
                count++;
            }
        }
    };
    return count;    
};

let test1 = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];

console.log(countBattleships(test1));