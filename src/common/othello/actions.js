import {placePieceOnBoard} from './boardUtil';

//player actions
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const NEW_PLAYER_TURN = 'NEW_PLAYER_TURN';

//board actions
export const PLACING_PIECE = 'PLACING_PIECE';
export const DONE_PLACING_PIECE = 'DONE_PLACING_PIECE';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const UPDATE_MOVES_AND_SCORE = 'UPDATE_MOVES_AND_SCORE';
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

export function updateMovesAndScore() {
  return {
    type: UPDATE_MOVES_AND_SCORE
  };
}

export function newPlayerTurn(newPlayerId) {
  return {
    type: NEW_PLAYER_TURN,
    payload: {newPlayerId}
  };
}

export function placePiece(row, column) {
  return ({dispatch, getState}) => {
    const {board, players, currentPlayerTurn} = getState().othello.toJS();
    const curPlayer = players[currentPlayerTurn];
    const nextPlayerId = currentPlayerTurn === 1 ? 2 : 1;

    placePieceOnBoard(row, column, board, curPlayer)
      .then((board)=>{
        dispatch(updateBoard(board));
      })
      .then(()=>{
        dispatch(newPlayerTurn(nextPlayerId));
      })
      .then(()=>{
        dispatch(updateMovesAndScore());
      })
      .catch(()=>{
        dispatch(invalidMove);
      })
      .then(()=>{
        dispatch(donePlacingPiece());
      });

    return placingPiece();
  };
}
