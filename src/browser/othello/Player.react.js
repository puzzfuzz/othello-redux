import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

if (process.env.IS_BROWSER)
  require('./Player.styl');

export default class Othello extends Component {

  static propTypes = {
    isTurn: PropTypes.bool.isRequired,
    msg: PropTypes.object,
    player: PropTypes.object.isRequired,
    score: PropTypes.number
  }

  render() {
    const {msg, isTurn, player: {name, color, id}, score} = this.props;

    return (
        <div className={`othello-player ${isTurn ? 'active' : ''}`}>
          <div className="player-header pure-g">
            <div className={`pure-u-1-1 pure-u-sm-2-3 ${color}`}>
              {msg.player} {id}
            </div>
            <div className="pure-u-1-1 pure-u-sm-1-3">
              Score: {score}
            </div>
          </div>
          <div className="player-name">{name}</div>
        </div>
    );
  }

}
