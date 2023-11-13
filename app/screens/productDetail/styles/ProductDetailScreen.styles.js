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
    marginTop: normalize(44, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(10, 'width'),
  },
  imageContainer: (height) => {
    return {
      marginTop: normalize(33, 'height'),
      height: (height / 1.9) * 0.7,
      borderRadius: normalize(8),
    }
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: normalize(8),
  },
  imageIcon: {
    position: 'absolute',
    right: normalize(8, 'width'),
    width: normalize(30),
    height: normalize(30),
    borderRadius: 30 / 2,
    backgroundColor: rooStyles.bgSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  productInfoContainer: {
    marginTop: normalize(22, 'height'),
    width: '100%',
    flexDirection: 'column',
  },
  buyButton: {
    width: '100%',
    height: normalize(44, 'height'),
    marginTop: normalize(44, 'height'),
    backgroundColor: rooStyles.bgButton,
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    lineHeight: normalize(22, 'height'),
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(22, 'height'),
  },
  buttonOption: {
    width: normalize(163),
    height: normalize(44),
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: rooStyles.bgButton,
  },
})
;('h-11 rounded-lg bg-transparent flex items-center justify-center border border-[#809671]')
