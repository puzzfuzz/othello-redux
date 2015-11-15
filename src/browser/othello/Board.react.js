import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Tile from './Tile.react';

if (process.env.IS_BROWSER)
  require('./Board.styl');

export default class Board extends Component {

  static propTypes = {
    boardState: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentPlayerColor: PropTypes.string.isRequired,
    tileHovered: PropTypes.func.isRequired,
    tileSelected: PropTypes.func.isRequired,
    validPossibleMove: PropTypes.object
  }

  render() {
    const {boardState, currentPlayerColor, tileHovered, tileSelected, validPossibleMove} = this.props;

    return (
        <div className="othello-board">
          <div className="pure-g">
            {boardState.map((row, r)=>{
              return row.map((col, c) => {
                return (
                  <Tile column={c}
                        currentPlayerColor={currentPlayerColor}
                        isCurrentValidMove={validPossibleMove && validPossibleMove.row === r && validPossibleMove.column === c}
                        isEmpty={col === ''}
                        key={`cell_${r}_${c}`}
                        owner={col}
                        row={r}
                        tileHovered={tileHovered}
                        tileSelected={tileSelected}
                        />
                );
              });
            })}
          </div>
        </div>
    );
  }

}
