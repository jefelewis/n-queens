// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
     
      var conflict = false;
      var count = 0;
            
      // Iterate through the rows array (Mega Array)
      for (var i = 0; i < this.rows()[rowIndex].length; i++) {
        // Add up the array values
        count = count + this.rows()[rowIndex][i];
      }
      // If the array values exist more than once, return false
      if (count > 1) {
        conflict = true;
      } 
      
      return conflict;
      
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      // Check the index for the initial rowIndex
      // Iterate through the first rowIndex
      var conflict = false;
      
      for (var i = 0; i < this.rows().length; i++) {
        if (this.hasRowConflictAt(i)) {
          conflict = true;
        } 
      }
      return conflict;
      
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      
      var conflict = false; // fixme
      var count = 0;
      
      // Iterate through the rows array (Mega Array)
      for (var i = 0; i < this.rows().length; i++) {
        // If the array values exist more than once, return false
        count += this.rows()[i][colIndex];
      }
      
      if (count > 1) {
        conflict = true;
      }
      
      return conflict;         
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      
      var conflict = false;
      
      // Iterate through the rows array (Mega Array)
      for (var i = 0; i < this.rows().length; i++) {
        if (this.hasColConflictAt(i)) {
          conflict = true;
        } 
      }
      return conflict;
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      // console.log('major ', majorDiagonalColumnIndexAtFirstRow);
      var conflict = false;
      var count = 0;
      
      
      // Across = 2
      var across = majorDiagonalColumnIndexAtFirstRow;
      
      // Iterate through the Rows (Mega Array) (Going Right)
      for (var i = 0; i < this.rows().length; i++) {
        // If there is nothing to the right of it
        if (this.rows()[i][across] !== undefined) {
          // 
          count += this.rows()[i][across];
          across++;
        }
      }
      
      if (count > 1) {
        conflict = true;
      }
      
      return conflict;
      
      
      
      //---------------------------
      // var conflict = false;
      // var count = 0;
      // var arrayIndex = majorDiagonalColumnIndexAtFirstRow; // arrayIndex = 0
      // var verticalIndex = 0;
      
      
      // // Iterate through the Rows (Mega Array)
      // for (var i = 0; i < this.rows().length; i++) {
        
      //   // // Search Bottom Left
      //   // for (var j = 0; j < this.rows().length; j--) {
          
          
      //   // }
        
      //   // If there is nothing to the right of it
      //   if (this.rows()[i][arrayIndex] !== undefined) {
          
      //     // Icrease the Count by 0 or 1, depending if there is a value
      //     count += this.rows()[verticalIndex][arrayIndex];
      //     // Increase the Current Index by 1
      //     arrayIndex += 1;
      //   }
        
      //   // console.log(arrayIndex);
        
      // }
      
      
      // // // Iterate through the Rows (Mega Array) (Going Left)
      // // for (var j = 0; j < this.rows().length; j--) {
      // //   // Vertjcal Index (Left)
      // //   var leftacross = majorDiagonalColumnIndexAtFirstRow;
        
      // //   // If there is notthing to the left of it
      // //   if (this.rows()[j][leftacross]) {
      // //     count += this.rows()[j][leftacross];
      // //     leftacross += 1;
          
      // //   }
      // // }
      
      
      // if (count > 1) {
      //   conflict = true;
      // }
      
      // return conflict;
      //---------------------------
      
      
      
      
      
      // // Column Index
      // var searchIndex = 0;
      // var firstIndex = 0;
      
      // // Find the index value of the first array
      // // Iterate through the first row
      // for (var i = 0; i < this.rows().length; i++) {
        
      //   // Iterate through the rowIndex array
      //   for (var j = 0; j < this.rowIndex().length; j++) {
        
      //     // Find the Index value within the first array
      //     if (this.rowIndex()[j] === 1) {
      //       firstIndex = this.rowIndex()[j];
      //     }
          
      //     // Add 1 to the current index count
      //     searchIndex = firstIndex + 1;
      //   }
        
        
      //   // Search through the rest of the arrays
      //   if (this.rowIndex()[searchIndex] === 1) {
      //     conflict = true; 
      //   }
        
      //   // Add 1 to the current index count
      //   searchIndex += 1;  
      // }
      // return conflict;
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      var conflict = false; // fixme
      // var outerIndex = 0;
      // var innerIndex = 0;
      
      // Iterate through the Mega Array
      
      for (var i = 0; i < this.rows()[0].length; i++) {
        if (this.hasMajorDiagonalConflictAt(i)) {
          conflict = true;
        }
      }
      
 
      
      
      for (var i = 0; i < this.rows().length; i++) {
        
        // Iterate through the Inner array
        for (var j = 0; j < this.rows()[i].length; j++) {
          // Check if Array values pass the "hasMajorDiagonalConflictAt" test
          if (this.hasMajorDiagonalConflictAt([i]) === true) {
            conflict = true;
          }
        }
        
        // Add 1 to the Outer Index Array value
        // outerIndex += 1;
        
      }      
      return conflict;
      
      
      
      // // Searching the first array
      // for (var i = 0; i < this.rows()[0].length; i++) {
      //   if (this.hasMajorDiagonalConflictAt(i)) {
      //     conflict = true;
      //   }
        
      // }
      
      // // Searching the arrays under that 
      // for (var j = 1; j < this.rows().length; j++) {
      //   if (this.hasMajorDiagonalConflictAt(0)) {
      //     conflict = true;
          
      //   }
      // }
      // return conflict;
    },



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
