import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Tile from './Tile.react';

if (process.env.IS_BROWSER)
  require('./Board.styl');

export default class Board extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    boardState: PropTypes.arrayOf(PropTypes.array).isRequired
  }

  render() {
    const {boardState, actions: {placePiece: actionPlacePiece}} = this.props;

    return (
        <div className="othello-board">
            {boardState.map((row, r)=>{
              return (
                <div className="othello-row" key={`row_${r}`} >
                {row.map((col, c) => {
                  return (
                    <Tile actionPlacePiece={actionPlacePiece}
                          column={c}
                          isEmpty={col === ''}
                          key={`cell_${r}_${c}`}
                          owner={col}
                          row={r} />
                  );
                })}
              </div>
            );
            })}
        </div>
    );
  }

}
