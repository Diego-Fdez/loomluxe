import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../constants'

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(27, 'width'),
  },
  image: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: normalize(8),
    resizeMode: 'cover',
  },
  categoryName: {
    fontSize: normalize(rootFonts.small),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    lineHeight: normalize(21, 'height'),
    color: rooStyles.textSecondary,
    marginTop: normalize(7, 'height'),
    textTransform: 'capitalize',
  },
})
