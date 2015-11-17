import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

import Piece from './Piece.react';

export default class Tile extends Component {

  static propTypes = {
    column: PropTypes.number.isRequired,
    currentPlayerColor: PropTypes.string.isRequired,
    isEmpty: PropTypes.bool.isRequired,
    owner: PropTypes.string,
    row: PropTypes.number.isRequired,
    tileSelected: PropTypes.func.isRequired,
    validMove: PropTypes.bool
  }

  tileClicked() {
    const {isEmpty, tileSelected, row, column} = this.props;

    if (!isEmpty) {
      return;
    }

    tileSelected(row, column);
  }

  render() {
    const {currentPlayerColor, isEmpty, owner, validMove} = this.props;

    if (isEmpty) {
      return (
        <div className="pure-u-1-8" onClick={()=>this.tileClicked()} >
          <div className={`othello-tile ${validMove ? `valid-move ${currentPlayerColor}` : ''}`} >
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
