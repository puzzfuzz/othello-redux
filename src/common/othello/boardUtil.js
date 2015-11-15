
export function placePieceOnBoard(r, c, board, player) {
  return new Promise((resolve, reject)=>{
    board[r][c] = player.color;
    resolve(board);
  });
}
