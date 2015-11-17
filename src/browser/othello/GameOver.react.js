import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

if (process.env.IS_BROWSER)
  require('./GameOver.styl');

export default class GameOver extends Component {

  static propTypes = {
    score: PropTypes.object
  }

  render() {
    const {score} = this.props;
    const winner = score.red > score.blue ? 'red' : 'blue';

    return (
      <div className="game-over">
        Game Over! <span className={`winner ${winner}`}>{winner.toUpperCase()} WINS!</span>
      </div>
    );
  }
}
