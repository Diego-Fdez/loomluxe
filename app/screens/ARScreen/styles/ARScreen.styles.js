import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorsContainer: {
    position: 'absolute',
    top: normalize(250, 'height'),
    left: normalize(20, 'width'),
  },
  button: {
    width: normalize(25),
    height: normalize(25),
    borderRadius: 25 / 2,
    marginTop: normalize(10, 'height'),
    zIndex: 10,
  },
})
