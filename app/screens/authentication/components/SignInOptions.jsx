import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { GOOGLE_ICON } from '../../../utils'
import { styles } from '../styles/SigInOptions.styles'

const SignInOptions = () => {
  return (
    <>
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}}>{GOOGLE_ICON}</TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="apple1" size={36} color="#555555" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="facebook" size={36} color="#1877F2" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SignInOptions
