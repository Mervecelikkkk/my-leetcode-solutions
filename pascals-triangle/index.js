/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let pascalsTriangle = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            const rowAbove = pascalsTriangle[i - 1]
            row[j] = rowAbove[j] + rowAbove[j - 1];
        }
        pascalsTriangle[i] = row;
    }
    return pascalsTriangle;

};

// Big O Notation: O(n^2)
// Space: O(n^2)