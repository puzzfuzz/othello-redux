import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

import Piece from './Piece.react';

export default class Tile extends Component {

  static propTypes = {
    actionPlacePiece: PropTypes.func.isRequired,
    column: PropTypes.number.isRequired,
    isEmpty: PropTypes.bool.isRequired,
    owner: PropTypes.string,
    row: PropTypes.number.isRequired
  }

  tileClicked() {
    const {isEmpty, actionPlacePiece, row, column} = this.props;

    if (!isEmpty) {
      return;
    }

    actionPlacePiece(row, column);
  }

  render() {
    const {isEmpty, owner} = this.props;

    return (
      <div className="othello-tile" onClick={()=>this.tileClicked()} >
        {!isEmpty && (
          <Piece owner={owner} />
        )}
      </div>
    );
  }
}
