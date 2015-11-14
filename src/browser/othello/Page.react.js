import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';

import Player from './Player.react';
import Board from './Board.react';

const BoardState = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', 'red', 'blue', '', '', ''],
  ['', '', '', 'blue', 'red', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
];

if (process.env.IS_BROWSER)
  require('./Page.styl');

export default class Othello extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object
  }

  render() {
    const {msg: {othello: msg}, actions} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="othello-page">
          <h1>{msg.title}</h1>
          <Board actions={actions} boardState={BoardState} />
          <Player color="red" msg={msg} name="Bob" playerNumber="1" />
          <Player color="blue" msg={msg} name="Jane" playerNumber="2" />
        </div>
      </DocumentTitle>
    );
  }

}
