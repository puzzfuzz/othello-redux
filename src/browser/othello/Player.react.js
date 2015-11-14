import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

if (process.env.IS_BROWSER)
  require('./Player.styl');

export default class Othello extends Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
    msg: PropTypes.object,
    name: PropTypes.string.isRequired,
    playerNumber: PropTypes.string.isRequired
  }

  render() {
    const {msg, name, color, playerNumber} = this.props;

    return (
        <div className="othello-player">
          <h1>{msg.player} {playerNumber}</h1>
          <h2 style={{color:color}}>{name}</h2>
        </div>
    );
  }

}
