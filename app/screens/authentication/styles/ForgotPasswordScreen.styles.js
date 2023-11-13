import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants/rootStyles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 2,
    width: '100%',
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 2,
    backgroundColor: rooStyles.bgPrimary,
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
    marginTop: normalize(-23, 'height'),
    paddingHorizontal: normalize(22, 'width'),
  },
  title: {
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h3),
    color: rooStyles.textSecondary,
    marginVertical: normalize(22, 'height'),
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
  linkLabel: {
    fontFamily: 'mrt-400',
    fontSize: normalize(rootFonts.h6),
    fontWeight: '400',
    color: rooStyles.textSecondary,
    textAlign: 'center',
    marginTop: normalize(44, 'height'),
  },
  linkLabelBold: {
    fontFamily: 'mrt-600',
    fontSize: normalize(rootFonts.h6),
    fontWeight: '600',
    color: rooStyles.textSecondary,
  },
})
