import {placePieceOnBoard, checkIfMoveIsValid} from './boardUtil';

//player actions
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const NEXT_PLAYER_TURN = 'NEXT_PLAYER_TURN';

//board actions
export const PLACING_PIECE = 'PLACING_PIECE';
export const DONE_PLACING_PIECE = 'DONE_PLACING_PIECE';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const INVALID_MOVE = 'INVALID_MOVE';
export const VALID_POSSIBLE_MOVE = 'VALID_POSSIBLE_MOVE';
export const CHECKING_TILE = 'CHECKING_TILE';

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

export function checkingTile() {
  return {
    type: CHECKING_TILE
  };
}

export function checkTile(row, column) {
  return ({dispatch, getState}) => {
    const {board, players, currentPlayerTurn} = getState().othello.toJS();
    const curPlayer = players[currentPlayerTurn];

    checkIfMoveIsValid(row, column, board, curPlayer)
      .then(()=>{
        dispatch(validPossibleMove(row, column));
      })
      .catch(()=>{
        dispatch(invalidMove());
      });

    return checkingTile();
  };
}

export function validPossibleMove(row, column) {
  return {
    type: VALID_POSSIBLE_MOVE,
    payload: {row, column}
  };
}

export function placePiece(row, column) {
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

    return placingPiece();
  };
}
