import Component from '../components/Component.react';
import React, {PropTypes, View} from 'react-native';
import Tile from './Tile.react';
import pageStyles from './styles';

export default class Board extends Component {

  static propTypes = {
    boardState: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentPlayerColor: PropTypes.string.isRequired,
    tileSelected: PropTypes.func.isRequired,
    validMoves: PropTypes.object
  }

  render() {
    const {boardState, currentPlayerColor, tileSelected, validMoves} = this.props;
    // const {board, row, tile} = pageStyles;

    return (
      <View style={[pageStyles.board]}>
        {boardState.map((row, r)=>{
          return (
            <View key={`cell_${r}`} style={[pageStyles.row]}>
              {row.map((col, c) => {
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
              })}
            </View>
          );}
        )}
      </View>
    );
  }

}
