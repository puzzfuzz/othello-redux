import Component from '../components/Component.react';
import React, {PropTypes, View, TouchableHighlight} from 'react-native';
import Button from 'react-native-button';
import pageStyles from './styles';
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

  tileSelected() {
    const {isEmpty, tileSelected, row, column} = this.props;
    if (!isEmpty) {
      return;
    }

    tileSelected(row, column);
  }

  render() {
    const {currentPlayerColor, isEmpty, owner, validMove} = this.props;
// onClick={()=>this.tileClicked()}
// <div className={`othello-tile ${validMove ? `valid-move ${currentPlayerColor}` : ''}`} >
// </div>
// <Button onPress={()=>this.tileClicked()} >
//   <View style={[pageStyles.tile]} >
//     <Piece isEmpty={isEmpty} owner={owner} />
//   </View>
// </Button>

    if (isEmpty) {
      return (
        <View style={[pageStyles.tile]} >
          <Piece currentPlayerColor={currentPlayerColor}
            isEmpty={isEmpty}
            isValidMove={validMove}
            owner={owner}
            selected={()=>this.tileSelected()} />
        </View>
      );
    }
    else { //Once a tile's claimed, don't bind any listeners.
      return (
        <View style={[pageStyles.tile]} >
          <Piece owner={owner} />
        </View>
      );
    }
  }
}
