import Immutable, {Record} from 'immutable';
import Player, {PLAYER_RED, PLAYER_BLUE} from './player';
import * as actions from './actions';
import {checkMovesAndScore} from './boardUtil';

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
  validMoves: {},
  score: {
    'red': 2,
    'blue': 2,
    '': 60
  },
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
    case actions.NEW_PLAYER_TURN: {
      const {newPlayerId} = action.payload;
      state = state.set('currentPlayerTurn', newPlayerId);
      break;
    }
    case actions.UPDATE_MOVES_AND_SCORE: {
      const {board, players, currentPlayerTurn} = state.toJS();
      const player = players[currentPlayerTurn];
      const {score, validMoves} = checkMovesAndScore(board, player);

      state = state.set('score', score)
                .set('validMoves', validMoves);
      break;
    }
  }

  return state;
}
