import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { rooStyles } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rooStyles.bgPrimary,
  },
  searchBoxContainer: {
    width: '100%',
    marginBottom: normalize(23, 'height'),
    paddingHorizontal: normalize(22, 'width'),
    marginTop: normalize(44, 'height'),
  },
  titleContentContainer: {
    width: '100%',
    marginBottom: normalize(11, 'height'),
  },
  cardsContainer: {
    paddingHorizontal: normalize(22, 'width'),
    marginBottom: normalize(22, 'height'),
    width: '100%',
  },
})
