import {StyleSheet, PixelRatio} from 'react-native';

export default StyleSheet.create({
  board: {
    margin: 3
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  tile: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1 / PixelRatio.get(),
    height: 42,
    width: 42,
    padding: 4
  },
  piece: {
    height: 34,
    width: 34,
    borderRadius: 17
  },
  pieceRed: {
    backgroundColor: 'red'
  },
  pieceBlue: {
    backgroundColor: 'blue'
  },
  pieceEmpty: {
    backgroundColor: 'white'
  },
});
