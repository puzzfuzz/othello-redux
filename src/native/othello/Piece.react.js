import Component from '../components/Component.react';
import React, {PropTypes, View, TouchableHighlight} from 'react-native';
import pageStyles from './styles';

export default class Tile extends Component {

  static propTypes = {
    currentPlayerColor: PropTypes.string,
    isEmpty: PropTypes.bool,
    isValidMove: PropTypes.bool,
    owner: PropTypes.string.isRequired,
    selected: PropTypes.func
  }

  render() {
    const {currentPlayerColor, isEmpty, owner, selected, isValidMove} = this.props;
    let styles = [pageStyles.piece];

    if (isEmpty) {
      styles.push(pageStyles.pieceEmpty);
    }
    else if (owner === 'red') {
      styles.push(pageStyles.pieceRed);
    }
    else {
      styles.push(pageStyles.pieceBlue);
    }

    if (isValidMove) {
      styles.push(pageStyles.validMove);
      styles.push(pageStyles[currentPlayerColor + 'ValidMove']);
    }

    if (isEmpty) {
      return (
        <TouchableHighlight onPress={selected} underlayColor="blue">
          <View style={styles} />
        </TouchableHighlight>
      );
    } //else
    return (
        <View style={styles}/>
    );
  }
}
