import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rooStyles.bgPrimary,
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: normalize(22, 'width'),
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: normalize(44, 'height'),
  },
  deleteButtonText: {
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.p),
    fontWeight: '400',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: normalize(11, 'height'),
  },
  totalText: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
  totalAmountText: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-500',
    fontWeight: '500',
    color: rooStyles.textPrimary,
    lineHeight: normalize(21, 'height'),
  },
  button: {
    width: '100%',
    height: normalize(44, 'height'),
    borderRadius: normalize(8),
    marginTop: normalize(44, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: rooStyles.bgButton,
  },
  buttonText: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    color: '#fff',
    lineHeight: normalize(21, 'height'),
  },
})
