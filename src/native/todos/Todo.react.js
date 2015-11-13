import Component from '../components/Component.react';
import React from 'react-native';

const {
  Image, PropTypes, StyleSheet, TextInput, TouchableOpacity, View
} = React;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    color: '#7C7C7C',
    flex: 1,
    fontSize: 16,
    paddingRight: 20
  },
  checkbox: {
    height: 30,
    marginLeft: 20,
    marginRight: 20,
    width: 30
  }
});

export default class TodoItem extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired
  }

  render() {
    const {actions, todo} = this.props;
    const image = todo.completed
      ? require('../../../assets/img/SelectedCheckbox.png')
      : require('../../../assets/img/EmptyCheckbox.png');

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => actions.toggleTodoCompleted(todo)}
        >
          <Image source={image} style={styles.checkbox} />
        </TouchableOpacity>
        <TextInput
          editable={false}
          style={[styles.input]}
          value={todo.title}
        />
      </View>
    );
  }

}
