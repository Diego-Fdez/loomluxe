import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  label: {
    textAlign: 'left',
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h5),
    fontWeight: '400',
    color: rooStyles.textSecondary,
    marginLeft: normalize(8, 'width'),
  },
  input: {
    fontFamily: 'mrt-400',
    fontSize: normalize(16),
    height: normalize(44),
    width: '100%',
    backgroundColor: rooStyles.bgSecondary,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(8, 'width'),
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideTextButton: {
    position: 'absolute',
    right: normalize(14, 'width'),
  },
  link: {
    alignSelf: 'flex-end',
  },
  linkLabel: {
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h6),
    fontWeight: '400',
    color: rooStyles.textSecondary,
  },
  button: {
    width: '100%',
    backgroundColor: rooStyles.bgButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(55),
    marginTop: normalize(22, 'height'),
    borderRadius: normalize(13),
  },
  buttonText: {
    fontFamily: 'mrt-400',
    fontSize: normalize(20),
    fontWeight: '400',
    color: '#fff',
  },
})
