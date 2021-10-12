// Please do not change the name of this function
export const checkDiagonalWinner = (board) => {
 
    //iterate over board.
    //if value is not null then check its downward diagonals
  
    if(!Array.isArray(board)) {
      return 'Please provide a 7*6 matrix'; 
    }
  
    if(board.length !== 6) {
      return 'Please provide a 7*6 matrix'; 
    }
  
    for(let i = 0; i < board.length; i++) {
      if(board[i].length !== 7) {
        return 'Please provide a 7*6 matrix'; 
      }
    }
  
  
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
        if(board[i][j] !== null) {
          let letterToCheck = board[i][j];
  
          //check Check SE diagonal
          for(let k = 1; k < 4; k++) {
            if(i+k >= board.length || i+k >= board[i].length) {
              break;
            }
            if(board[i+k][j+k] !== letterToCheck) {
              break;
            } else if(k === 3) {
              return letterToCheck;
            }
          }
  
          //check SW diagonal
          for(let k = 1; k < 4; k++) {
            if(i+k >= board.length || i+k >= board[i].length) {
              break;
            }
            if(board[i+k][j-k] !== letterToCheck) {
              break;
            } else if(k === 3) {
              return letterToCheck;
            }
          }
        }
      }
    }
  
    return false;
  }
  

  