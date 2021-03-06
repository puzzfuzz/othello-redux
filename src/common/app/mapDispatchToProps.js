import * as uiActions from '../ui/actions';
import * as othelloActions from '../othello/actions';
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

const actions = [
  uiActions,
  othelloActions
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
