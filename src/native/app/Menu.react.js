import Component from '../components/Component.react';
import Dimensions from 'Dimensions';
import React from 'react-native';

const {
  PropTypes, ScrollView, StyleSheet, Text, View
} = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2C',
    flex: 1,
    height: window.height,
    width: window.width * .7
  },
  menu: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  item: {
    fontSize: 16,
    padding: 10,
    color: '#fff'
  },
  header: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10
  }
});

export default class Menu extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    onRouteChange: PropTypes.func.isRequired
  }

  render() {
    const {msg: {app: {links}}, onRouteChange} = this.props;
    const pages = ['home', 'othello'];

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={styles.menu}
        style={styles.container}
      >
        <View>
          {pages.map(page =>
            <Text
              key={page}
              onPress={() => onRouteChange(page)}
              style={styles.item}
            >{links[page]}</Text>
          )}
        </View>
        {/* TODO: Switch language here. */}
      </ScrollView>
    );
  }

}
