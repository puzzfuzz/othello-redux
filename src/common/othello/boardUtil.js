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
    checkIfMoveIsValid(r, c, board, player)
      .then(pieces => {
        board[r][c] = player.color;
        claimTiles(pieces, board, player.color);
        resolve(board);
      })
      .catch(()=>{
        reject();
      });
  });
}

export function checkIfMoveIsValid(r, c, board, player) {
  return new Promise((resolve, reject)=>{
    if (!isEmpty(board[r][c])) { //if the cell is already occupied, it's not a valid move
      reject();
      return;
    }
    let pieces = piecesToFlipForMove(r, c, board, player.color);
    if (pieces.length) { // A move is only valid if it results in flips
      resolve(pieces);
    }
    else { // If there are no pieces to flip, reject the handler
      //NOTE: this will throw in Chrome with "Pause on Exceptions" enabled
      //  - this rejection is currently handled in the sole reducer calling it
      reject();
    }
  });
}
