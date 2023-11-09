import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(22, 'width'),
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalize(279),
    height: normalize(220),
    resizeMode: 'cover',
  },
  text: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    marginTop: normalize(19, 'height'),
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
})
