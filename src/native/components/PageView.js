import Component from './Component.react';
import React, {PropTypes, View} from 'react-native';
import styles from '../app/styles';

export default class SceneView extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }

  static defaultProps = {
    style: []
  }

  render() {
    let {style} = this.props;
    if (!Array.isArray(style)) {
      style = [style];
    }

    return (
      <View style={[styles.pageView, ...style]}>
        {this.props.children}
      </View>
    );
  }

}
