import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

import Piece from './Piece.react';

export default class Tile extends Component {

  static propTypes = {
    column: PropTypes.number.isRequired,
    isEmpty: PropTypes.bool.isRequired,
    owner: PropTypes.string,
    row: PropTypes.number.isRequired,
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
