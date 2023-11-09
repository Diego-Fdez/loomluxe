import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants/rootStyles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: normalize(29, 'height'),
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: rooStyles.bgSecondary,
    borderRadius: normalize(8),
    backgroundColor: rooStyles.bgTertiary,
    marginBottom: normalize(32, 'height'),
    height: normalize(121),
    width: '100%',
    padding: normalize(11),
  },
  deleteButton: {
    position: 'absolute',
    right: normalize(8, 'width'),
    top: normalize(11, 'height'),
  },
  image: {
    width: normalize(101),
    height: '100%',
    marginRight: normalize(14, 'width'),
    borderRadius: normalize(4),
    resizeMode: 'cover',
  },
  wrapper: {
    width: normalize(185),
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textName: {
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h6),
    fontWeight: '400',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
  textSmall: {
    fontFamily: 'mrt-200',
    fontSize: normalize(rootFonts.small),
    fontWeight: '200',
    color: rooStyles.textSecondary,
    lineHeight: normalize(18, 'height'),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  priceText: {
    fontFamily: 'mrt-500',
    fontSize: normalize(rootFonts.h6),
    fontWeight: '500',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(12, 'width'),
  },
  quantityText: {
    fontSize: normalize(rootFonts.h5),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
})
