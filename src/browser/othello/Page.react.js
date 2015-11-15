import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';

import Player from './Player.react';
import Board from './Board.react';

if (process.env.IS_BROWSER)
  require('./Page.styl');

export default class Othello extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object,
    othello: PropTypes.object
  }

  selectTile(row, column) {
    const {actions:{placePiece}} = this.props;
    placePiece(row, column);
  }

  render() {
    const {msg: {othello: msg}, othello} = this.props; //player1, player2
    const _othello = othello.toJS();
    const {board, players, currentPlayerTurn} = _othello;

    const player1 = players['1'],
      player2 = players['2'];

    return (
      <DocumentTitle title={msg.title}>
        <div className="othello-page">
          <h2>{msg.title}</h2>
          <div className="pure-g">
            <div className="pure-u-1-2">
              <Player isTurn={currentPlayerTurn === 1} msg={msg} player={player1} />
            </div>
            <div className="pure-u-1-2">
              <Player isTurn={currentPlayerTurn === 2} msg={msg} player={player2} />
            </div>
          </div>
          <Board boardState={board} tileSelected={(r, c)=>{this.selectTile(r, c);}} />
        </div>
      </DocumentTitle>
    );
  }

}
