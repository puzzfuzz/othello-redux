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
    const {msg: {othello: msg}, othello:{board}} = this.props; //player1, player2

    return (
      <DocumentTitle title={msg.title}>
        <div className="othello-page">
          <h2>{msg.title}</h2>
          <div className="pure-g">
            <div className="pure-u-1-2">
              <Player color="red" msg={msg} name="Bob" playerNumber="1" />
            </div>
            <div className="pure-u-1-2">
              <Player color="blue" msg={msg} name="Jane" playerNumber="2" />
            </div>
          </div>
          <Board boardState={board.toJS()} tileSelected={(r, c)=>{this.selectTile(r, c);}} />
        </div>
      </DocumentTitle>
    );
  }

}
