import Immutable, {Record} from 'immutable';
import Player from './player';
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
  player1: new Player({
    id: 1,
    color: Player.PLAYER_RED
  }),
  player2: new Player({
    id: 2,
    color: Player.PLAYER_BLUE
  }),
  currentPlayerTurn: 1,
  turnNumber: 0
});

const initialState = new InitialState;

function revive(state) {
  return initialState.mergeDeep(state);
}

export default function usersReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.PLACE_PIECE: {
      const {row, column} = action.payload;
      console.log('row: ' + row + 'column: ' + column);
    }

  }

  return state;
}
