import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: (height) => {
    return {
      width: '100%',
      height: (height / 2.7) * 0.9,
      objectFit: 'cover',
    }
  },
  wrapper: {
    flex: 1,
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
    marginTop: normalize(-23, 'height'),
    paddingHorizontal: normalize(22, 'width'),
    backgroundColor: rooStyles.bgPrimary,
  },
  title: {
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h3),
    color: rooStyles.textSecondary,
    marginVertical: normalize(22, 'height'),
  },
  linkText: {
    color: rooStyles.textSecondary,
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h5),
    marginTop: normalize(33, 'height'),
    textAlign: 'center',
    fontWeight: '400',
  },
  linkTextBlack: {
    fontFamily: 'mrt-600',
    fontSize: normalize(rootFonts.h5),
    marginTop: normalize(33, 'height'),
    color: rooStyles.textSecondary,
    fontWeight: '600',
  },
})
