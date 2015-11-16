import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

import Piece from './Piece.react';

export default class Tile extends Component {

  static propTypes = {
    column: PropTypes.number.isRequired,
    currentPlayerColor: PropTypes.string.isRequired,
    isCurrentValidMove: PropTypes.bool,
    isEmpty: PropTypes.bool.isRequired,
    owner: PropTypes.string,
    row: PropTypes.number.isRequired,
    tileHovered: PropTypes.func.isRequired,
    tileSelected: PropTypes.func.isRequired
  }

  tileClicked() {
    const {isEmpty, tileSelected, row, column} = this.props;

    if (!isEmpty) {
      return;
    }

    tileSelected(row, column);
  }

  render() {
    const {column, currentPlayerColor, isCurrentValidMove, isEmpty, owner, row, tileHovered} = this.props;

    if (isEmpty) {
      return (
        <div className="pure-u-1-8" onClick={()=>this.tileClicked()} >
          <div className={`othello-tile ${isCurrentValidMove ? `valid-move ${currentPlayerColor}` : ''}`}
              onMouseOver={()=>tileHovered(row, column)}
              >
            <Piece isEmpty={isEmpty} owner={owner} />
          </div>
        </div>
      );
    }
    else { //Once a tile's claimed, don't bind any listeners.
      return (
        <div className="pure-u-1-8" >
          <div className="othello-tile" >
            <Piece owner={owner} />
          </div>
        </div>
      );
    }

  }
}
