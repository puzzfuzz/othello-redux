import Component from '../components/Component.react';
import React, {PropTypes, Text, View} from 'react-native';
import PageView from '../components/PageView';
import pageStyles from './styles';

import Board from './Board.react';

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object.isRequired,
    othello: PropTypes.object
  }

  selectTile(row, column) {
    const {actions:{placePiece}, othello} = this.props;
    if (othello.get('placingPiece')) {
      return;
    }
    placePiece(row, column);
  }

  componentDidMount() {
    this.props.actions.updateMovesAndScore();
  }

  render() {
    const {msg: {native: {othello: msg}}, othello} = this.props;
    const {board, players, currentPlayerTurn, validMoves, score, gameOver} = othello.toJS();

    const player1 = players['1'],
      player2 = players['2'];

    const currentPlayerColor = players[currentPlayerTurn].color;


    return (
      <PageView >
        <Text >
          {msg.title}
        </Text>
        <Board boardState={board}
              currentPlayerColor={currentPlayerColor}
              tileSelected={(r, c)=>{this.selectTile(r, c);}}
              validMoves={validMoves}
              />
      </PageView>
    );
  }

}
