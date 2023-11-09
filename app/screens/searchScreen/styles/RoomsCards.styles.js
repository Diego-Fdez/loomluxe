import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  wrapper: {
    width: normalize(163),
    height: normalize(220),
    marginBottom: normalize(22, 'height'),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: rooStyles.bgSecondary,
    backgroundColor: rooStyles.bgTertiary,
    padding: normalize(11),
  },
  image: {
    width: '100%',
    height: normalize(175),
    marginBottom: normalize(11, 'height'),
    borderRadius: normalize(4),
    resizeMode: 'cover',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: normalize(rootFonts.h6),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
  icon: {
    zIndex: 20,
  },
})
