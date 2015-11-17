import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';

import Player from './Player.react';
import Board from './Board.react';
import GameOver from './GameOver.react';

if (process.env.IS_BROWSER)
  require('./Page.styl');

export default class Othello extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object,
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
    const {msg: {othello: msg}, othello} = this.props; //player1, player2
    const _othello = othello.toJS();
    const {board, players, currentPlayerTurn, validMoves, score, gameOver} = _othello;

    const player1 = players['1'],
      player2 = players['2'];

    const currentPlayerColor = players[currentPlayerTurn].color;

    return (
      <DocumentTitle title={msg.title}>
        <div className="othello-page">
          <div>{msg.title}</div>
          {gameOver && <GameOver score={score} />}
          <div className="pure-g">
            <div className="pure-u-1-2">
              <Player isTurn={currentPlayerTurn === player1.id}
                      msg={msg}
                      player={player1}
                      score={score[player1.color]}
                      />
            </div>
            <div className="pure-u-1-2">
              <Player isTurn={currentPlayerTurn === player2.id}
                      msg={msg}
                      player={player2}
                      score={score[player2.color]}
                      />
            </div>
          </div>
          <Board boardState={board}
                currentPlayerColor={currentPlayerColor}
                tileSelected={(r, c)=>{this.selectTile(r, c);}}
                validMoves={validMoves}
                />
        </div>
      </DocumentTitle>
    );
  }

}
