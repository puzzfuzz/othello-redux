import {Record} from 'immutable';

export const PLAYER_RED = 'red';
export const PLAYER_BLUE = 'blue';

const Player = Record({
  name: '',
  color: '',
  id: 0
});

export default Player;
