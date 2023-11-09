import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../constants/rootStyles'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: normalize(44, 'height'),
    marginBottom: normalize(21, 'height'),
  },
  title: {
    fontSize: normalize(rootFonts.h3),
    fontFamily: 'mrt-500',
    fontWeight: '500',
    color: rooStyles.textSecondary,
    lineHeight: normalize(21, 'height'),
  },
})
