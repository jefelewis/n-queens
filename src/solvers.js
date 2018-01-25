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
  
  // Index
  var index = 0;
  
  var innerArray = []; //--> ex. n=3 /---> [0,0,0]
  // Build Default Inner Array
  for (var k = 0; k < n; k++) {
    innerArray.push(0);
  }
  
  
  
  
  // Iterate through for n times (n = amount of times to push)
  for (var i = 0; i < n; i++) {
    innerArray[index] = 1;
    solution.push(innerArray);
    index ++;
  }
  
  
  
  
  
  
  
  
  
  
  // // Construct Board
  // for (var k = 0; k < n; k++) {
  //   solution.push([]);
  // }
  
  // return solution;
  
  // //---------
  // //var Board = big array
  // //rows Board[0], Board[1],....Board[n]
  // //column all same i's 
  // // n = 4

  // // There can only be one "1" per array. At the index of that array, other arrays must = "0"
  // //Row: there can only be 1 per array
  // //Column: there can only be 1 per specified index (for all i=0)

  // // Total Solutions
  
  
  // var totalSolutions = 0;

  // // Search Board[n] for Mega Array
  // for (var i = 0; i < n; i++) {
  //   // Iterate through the first array
  //   for (var j = 0; j < solution[i].length; j++) {
  //     var total = 0;

  //     // Find the value within the first sub array
  //     if (solution[i][j] === 1) {
  //       total++;
  //     }
  //   }
    
  //   // If the value only exists once, return true
  //   if (total <= 1) {
  //     return true;
  //     totalSolutions ++;
      
  //   } else {
  //     return false;
      
  //   }

  // }


  // Search if the value exists at the same index for the rest of the arrays 




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
