import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Tile from './Tile.react';

if (process.env.IS_BROWSER)
  require('./Board.styl');

export default class Board extends Component {

  static propTypes = {
    boardState: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentPlayerColor: PropTypes.string.isRequired,
    tileSelected: PropTypes.func.isRequired,
    validMoves: PropTypes.object
  }

  render() {
    const {boardState, currentPlayerColor, tileSelected, validMoves} = this.props;

    return (
        <div className="othello-board">
          <div className="pure-g">
            {boardState.map((row, r)=>{
              return row.map((col, c) => {
                const validMove = !!(validMoves && validMoves[r] && validMoves[r][c]);
                return (
                  <Tile column={c}
                        currentPlayerColor={currentPlayerColor}
                        isEmpty={col === ''}
                        key={`cell_${r}_${c}`}
                        owner={col}
                        row={r}
                        tileSelected={tileSelected}
                        validMove={validMove}
                        />
                );
              });
            })}
          </div>
        </div>
    );
  }

}
