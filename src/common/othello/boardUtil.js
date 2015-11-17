//board is 8x8 square, with 0,0 origin in NW corner
//directions are modeled as 2D vectors given above origin

const DIRECTIONS = {
  N:  {r:-1, c:0},
  NE: {r:-1, c:1},
  E:  {r:0, c:1},
  SE: {r:1, c:1},
  S:  {r:1, c:0},
  SW: {r:1, c:-1},
  W:  {r:0, c:-1},
  NW: {r:-1, c:-1}
};

const DIRECTIONS_LIST = [
  DIRECTIONS.N,
  DIRECTIONS.NE,
  DIRECTIONS.E,
  DIRECTIONS.SE,
  DIRECTIONS.S,
  DIRECTIONS.SW,
  DIRECTIONS.W,
  DIRECTIONS.NW,
];

const MAX_HEIGHT = 8;
const MAX_WIDTH = 8;

//ensure row / column tupple is within board bounds
function isOnBoard(r, c) {
  return r > 0 && r < MAX_WIDTH
      && c > 0 && c < MAX_HEIGHT;
}

function isEmpty(tileColor) {
  return tileColor === '';
}

function isEnemy(tileColor, playerColor) {
  return tileColor === otherPlayerColor(playerColor);
}

function isFriendly(tileColor, playerColor) {
  return tileColor === playerColor;
}

function otherPlayerColor(playerColor) {
  return playerColor === 'red' ? 'blue' : 'red';
}

function claimTiles(tiles, board, playerColor) {
  if (tiles && tiles.length) {
    for (let tile of tiles) {
      board[tile.r][tile.c] = playerColor;
    }
  }
  return board;
}

function piecesToFlipForMove(r, c, board, playerColor) {
  let pieces = [];
  //check each cardinal drection
  for (let dir of DIRECTIONS_LIST) {
    let toFlip = piecesToFlipForDirection(r, c, board, playerColor, dir);
    if (toFlip) {
      pieces.push(...toFlip);
    }
  }
  return pieces;
}

function piecesToFlipForDirection(r, c, board, playerColor, dir) {
  let pieces = [];
  let tR = r + dir.r,
    tC = c + dir.c;
  while (isOnBoard(tR, tC)) {
    let tileColor = board[tR][tC];
    if (isEmpty(tileColor)) return []; //cell is empty, cancel and don't flip anything
    if (isFriendly(tileColor, playerColor)) return pieces; //found a friendly cell, break out and return any pending flips
    if (isEnemy(tileColor, playerColor)) pieces.push({r: tR, c: tC}); //push cell on stack to be flipped

    //advance index
    tR += dir.r; tC += dir.c;
  }

  //if we made it this far, it means we hit a wall - return nothing
  return [];
}

export function placePieceOnBoard(r, c, board, player) {
  return new Promise((resolve, reject)=>{
    let pieces = isMoveValid(r, c, board, player);
    if (pieces) {
      board[r][c] = player.color;
      claimTiles(pieces, board, player.color);
      resolve(board);
    }
    else {
      reject();
    }
  });
}

export function isMoveValid(r, c, board, player) {
  if (!isEmpty(board[r][c])) { //if the cell is already occupied, it's not a valid move
    return false;
  }
  let pieces = piecesToFlipForMove(r, c, board, player.color);
  if (pieces.length) { // A move is only valid if it results in flips
    return pieces;
  }
  else { // If there are no pieces to flip, reject the handler
    //NOTE: this will throw in Chrome with "Pause on Exceptions" enabled
    //  - this rejection is currently handled in the sole reducer calling it
    return false;
  }
}

//walk the board checking for all valid moves for the current plaeyer and tallying current score
// -- if NO valid moves, the game is over!
export function checkMovesAndScore(board, player) {
  let score = {
      '' : 0,
      'red' : 0,
      'blue' : 0
    },
    validMoves = {},
    gameOver = false;

  function updateValidMove(r, c) {
    if (validMoves[r]) {
      validMoves[r][c] = true;
    }
    else {
      validMoves[r] = {
        [c]: true
      };
    }
  }

  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (isEmpty(cell)) {
        if (isMoveValid(r, c, board, player)) {
          updateValidMove(r, c);
        }
      }
      else {
        score[cell]++;
      }
    });
  });

  if (Object.keys(validMoves).length === 0) {
    gameOver = true;
  }

  return {score, validMoves, gameOver};
}

export function countOwnedCells(board) {
  let score = {
    '' : 0,
    'red' : 0,
    'blue' : 0
  };

  for (let row of board) {
    for (let col of row) {
      score[col]++;
    }
  }

  return score;
}
