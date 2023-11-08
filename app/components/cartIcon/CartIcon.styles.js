import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles } from '../../constants'

export const styles = StyleSheet.create({
  ballon: {
    position: 'absolute',
    top: normalize(-10, 'height'),
    left: normalize(10, 'width'),
    backgroundColor: rooStyles.bgButton,
    width: normalize(24),
    height: normalize(24),
    borderRadius: 24 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(16),
    color: '#fff',
    fontWeight: '600',
    lineHeight: normalize(22, 'height'),
    fontFamily: 'mrt-600',
  },
})
