import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    width: normalize(163),
    height: normalize(240),
    marginBottom: normalize(22, 'height'),
    marginTop: normalize(11, 'height'),
    borderRadius: normalize(8),
    borderColor: rooStyles.bgSecondary,
    borderWidth: 1,
    backgroundColor: rooStyles.bgTertiary,
    padding: normalize(11),
  },
  image: {
    height: normalize(155),
    marginBottom: normalize(8, 'height'),
    width: '100%',
    borderRadius: normalize(4),
    resizeMode: 'cover',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    fontSize: normalize(rootFonts.h6),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    lineHeight: normalize(21, 'height'),
    color: rooStyles.textSecondary,
  },
  heartIcon: {
    zIndex: 20,
  },
  textCollection: {
    fontSize: normalize(rootFonts.small),
    fontFamily: 'mrt-200',
    fontWeight: '200',
    color: rooStyles.textSecondary,
    lineHeight: normalize(10, 'height'),
    marginBottom: normalize(8, 'height'),
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textPrice: {
    fontSize: normalize(rootFonts.h6),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    color: rooStyles.textSecondary,
  },
})
