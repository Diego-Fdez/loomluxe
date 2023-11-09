import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HeadTitle.styles'
import { rootStyles } from '../../constants'

const HeadTitle = ({ title }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute left-0"
      >
        <Ionicons
          name="chevron-back"
          size={30}
          color={rootStyles.textPrimary}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeadTitle
