import {placePieceOnBoard} from './boardUtil';

//player actions
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const NEXT_PLAYER_TURN = 'NEXT_PLAYER_TURN';

//board actions
export const PLACING_PIECE = 'PLACING_PIECE';
export const DONE_PLACING_PIECE = 'DONE_PLACING_PIECE';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const INVALID_MOVE = 'INVALID_MOVE';

export function invalidMove() {
  return {
    type: INVALID_MOVE
  };
}

export function placingPiece() {
  return {
    type: PLACING_PIECE
  };
}

export function donePlacingPiece() {
  return {
    type: DONE_PLACING_PIECE
  };
}

export function updateBoard(board) {
  return {
    type: UPDATE_BOARD,
    payload: {board}
  };
}

export function nextPlayerTurn(curPlayerId) {
  return {
    type: NEXT_PLAYER_TURN,
    payload: {curPlayerId}
  };
}

export function placePiece(row, column) {
  // debugger;
  return ({dispatch, getState}) => {
    const {board, players, currentPlayerTurn} = getState().othello.toJS();
    const curPlayer = players[currentPlayerTurn];

    placePieceOnBoard(row, column, board, curPlayer)
      .then((board)=>{
        dispatch(updateBoard(board));
      })
      .then(()=>{
        dispatch(nextPlayerTurn(currentPlayerTurn));
      })
      .catch(()=>{
        dispatch(invalidMove);
      })
      .then(()=>{
        dispatch(donePlacingPiece());
      });
    //   //TODO - handle invalid move

    return placingPiece();
  };
}
