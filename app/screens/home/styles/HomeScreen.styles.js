import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles, rootFonts } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rooStyles.bgPrimary,
    alignItems: 'center',
  },
  navContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(44, 'height'),
    paddingLeft: normalize(12, 'width'),
    marginBottom: normalize(44, 'height'),
    paddingRight: normalize(22, 'width'),
  },
  searchButton: {
    width: normalize(257),
    height: normalize(44),
    paddingLeft: normalize(4, 'width'),
    borderRadius: normalize(10),
    backgroundColor: rooStyles.bgSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  searchText: {
    fontSize: normalize(rootFonts.h4),
    fontFamily: 'mrt-400',
    fontWeight: 'normal',
    color: rooStyles.textSecondary,
    lineHeight: normalize(22, 'height'),
  },
  carouselContainer: {
    width: '100%',
    paddingHorizontal: normalize(22, 'width'),
  },
  titleWrapper: {
    width: '100%',
    marginBottom: normalize(11, 'height'),
  },
  cardsContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: normalize(67, 'height'),
  },
})
