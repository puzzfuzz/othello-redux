import Immutable, {Record} from 'immutable';
import Player, {PLAYER_RED, PLAYER_BLUE} from './player';
import * as actions from './actions';

const INITIAL_BOARD = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', 'red', 'blue', '', '', ''],
  ['', '', '', 'blue', 'red', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
];

const InitialState = Record({
  board: Immutable.fromJS(INITIAL_BOARD),
  currentPlayerTurn: 1,
  placingPiece: false,
  players: {
    1: new Player({
      id: 1,
      color: PLAYER_RED
    }),
    2: new Player({
      id: 2,
      color: PLAYER_BLUE
    })
  },
  turnNumber: 0
});

const initialState = new InitialState;

function revive(state) {
  return initialState.mergeDeep(state);
}

function otherPlayerId(playerId) {
  return playerId === 1 ? 2 : 1;
}

export default function othelloReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {
    case actions.PLACING_PIECE: {
      state = state.set('placingPiece', true);
      break;
    }
    case actions.DONE_PLACING_PIECE: {
      state = state.set('placingPiece', false);
      break;
    }
    case actions.UPDATE_BOARD: {
      const {board} = action.payload;
      state = state.set('board', Immutable.fromJS(board));
      break;
    }
    case actions.NEXT_PLAYER_TURN: {
      const {curPlayerId} = action.payload;
      state = state.set('currentPlayerTurn', otherPlayerId(curPlayerId));
      break;
    }
    // case actions.PLACE_PIECE: {
    //   const {row, column} = action.payload;
    //   const curPlayer = state.get('players').toJS()[state.get('currentPlayerTurn')];
    //   let board = state.get('board').toJS();
    //
    //   board = placePiece(row, column, board, curPlayer);
    //
    //   state = state.set('board', Immutable.fromJS(board));
    // }

  }

  return state;
}
