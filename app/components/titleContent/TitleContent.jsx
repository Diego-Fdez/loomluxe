import { View, Text, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { styles } from './TitleContent.styles'

const TitleContent = ({ title, marginTop }) => {
  return (
    <View
      style={[styles.container, { marginTop: normalize(marginTop, 'height') }]}
    >
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.textButton}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TitleContent
