
var getRow = function(rowIndex) {

    
    let pascalsTriangle = new Array(rowIndex);

    for (let i = 0; i <= rowIndex; i++) {
        const row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            const rowAbove = pascalsTriangle[i - 1]
            row[j] = rowAbove[j] + rowAbove[j - 1]; 
         
        }
          pascalsTriangle[i] = row;
    }
    return pascalsTriangle[rowIndex]


};

// Time Complexity: O(n^2)
// Space Copmlexity: O(n^2)
