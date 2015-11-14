//player actions
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const NEXT_PLAYER_TURN = 'NEXT_PLAYER_TURN';

//board actions
export const PLACE_PIECE = 'PLACE_PIECE';


export function placePiece(row, column) {
  return {
    type: PLACE_PIECE,
    payload: {row, column}
  };
}
