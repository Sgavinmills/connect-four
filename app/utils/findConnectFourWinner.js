import { checkDiagonalWinner } from './checkDiagonalWinner';

// Please do not change the name of this function
export const findConnectFourWinner = (board) => {
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

//check for horizontal or vertical winners
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if(board[i][j] !== null) {

        //check horizontal
        let letterToCheck = board[i][j];
        for(let k = 1; k < 4; k++) {
          if(i+k >= board.length) {
            break;
          }
          if(board[i][j+k] !== letterToCheck) {
            break;
          } else if(k === 3) {
            return letterToCheck;
          }
        }
  
        //check vertical
        for(let k = 1; k < 4; k++) {
          if(i+k >= board.length) {
            break;
          }
          if(board[i+k][j] !== letterToCheck) {
            break;
          } else if(k === 3) {
            return letterToCheck;
          }
        }
      }
    }
  }

  //if no vertical or horitzonal winners found then return the result fo searching for a diagonal winner
  return checkDiagonalWinner(board);
}

// module.exports = { findConnectFourWinner }
