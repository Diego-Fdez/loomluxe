import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: normalize(22, 'width'),
  },
  title: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-500',
    color: rooStyles.textSecondary,
    fontWeight: '500',
    lineHeight: normalize(22, 'height'),
  },
  textButton: {
    fontSize: normalize(12),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    color: rooStyles.textPrimary,
    lineHeight: normalize(22, 'height'),
  },
})
