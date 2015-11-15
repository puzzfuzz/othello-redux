import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

if (process.env.IS_BROWSER)
  require('./Player.styl');

export default class Othello extends Component {

  static propTypes = {
    isTurn: PropTypes.bool.isRequired,
    msg: PropTypes.object,
    player: PropTypes.object.isRequired
  }

  render() {
    const {msg, isTurn, player: {name, color, id}} = this.props;

    return (
        <div className={`othello-player ${isTurn ? 'active' : ''} ${color}`}>
          <div className="player-header">{msg.player} {id}</div>
          <div className="player-name">{name}</div>
        </div>
    );
  }

}
