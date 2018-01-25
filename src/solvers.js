/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  

  
  // Creates a Board (n x n) (Filled with 0s)
  for (var i = 0; i < n; i++) {
    // rowIndexArray is array at solution index
    var rowIndexArray = [];
    for (var j = 0; j < n; j++) {
      rowIndexArray[j] = 0;
    }
    solution[i] = rowIndexArray;
  }
  // Reassigns 0 to 1 in a diagonal
  for (var k = 0; k < n; k++) {
    for (var l = 0; l < n; l++) {
      if (k === l) {
        solution[k][l] = 1;
      }
    }
  }
  return solution;
  
  // this.hasAnyRooksConflicts

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var letsFactorial = function(num) {

    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return (num * letsFactorial(num - 1));
    }
  };

  solutionCount = letsFactorial(n);

  return solutionCount;

  

  // var rookCount = 0;
  // var startIndex = 0;
  // var traverseIndex = 0;

  // //First Rook Placement!!!
  // // Iterate through the board
  // for (var i = 0; i < this.rows().length; i++) {

  //   // Iterate through the first array: find all solutions at each index: 0 --> n
  //   for (var j = startIndex; j < this.rowIndex().length; j++) {
  //     // Start at rowIndex[i]
    
  //     // Check for Rook conflicts
  //     // if no conflict, toggle to 1 --> rookCount++
  //     if (this.hasAnyRooksConflicts(this.rowIndex()[i])) {
  //       // Place Rook
  //       this.togglePiece(this.rowIndex()[i]);
  //       // Add 1 to Rook count
  //       rookCount += 1;
  //     }


  //     // Need to Traverse



  //   }


    

  //} 
      // Check for Rook conflicts
        // if no conflict, toggle to 1 --> rookCount++
        
    //Run through whole board after first Rook placement!!!
    // For each square, check for Rook conflicts
        //if no conflict, toggle to 1 --> rookCount++

        //else, keep moving
      
      
        //Condition: if n have been placed (rookCount = n);
        //solution++



  //this.hasAnyRooksConflicts();




  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  // Creates a Board (n x n) (Filled with 0s)
  for (var i = 0; i < n; i++) {
    // rowIndexArray is array at solution index
    var rowIndexArray = [];
    for (var j = 0; j < n; j++) {
      rowIndexArray[j] = 0;
    }
    solution[i] = rowIndexArray;
  }

  // this.hasAnyQueenConflictsOn();


  // // Reassigns 0 to 1 in a diagonal
  // for (var k = 0; k < n; k++) {
  //   for (var l = 0; l < n; l++) {
  //     if (k === l) {
  //       solution[k][l] = 1;
  //     }
  //   }
  // }
  return solution;
  









  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
