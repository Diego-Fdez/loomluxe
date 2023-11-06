import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h6),
    marginTop: normalize(33, 'height'),
    marginBottom: normalize(10, 'height'),
    fontWeight: '400',
    color: rooStyles.textSecondary,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(20, 'width'),
  },
})
