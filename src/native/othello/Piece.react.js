import Component from '../components/Component.react';
import React, {PropTypes, View, TouchableHighlight} from 'react-native';
import pageStyles from './styles';

export default class Tile extends Component {

  static propTypes = {
    isEmpty: PropTypes.bool,
    owner: PropTypes.string.isRequired,
    selected: PropTypes.func
  }

  render() {
    const {isEmpty, owner, selected} = this.props;
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
