import {
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { useAuth } from './hooks'
import { styles } from './styles/ForgotPasswordScreen.styles'

const ForgotPasswordScreen = () => {
  const { email, setEmail, forgotPassword } = useAuth()

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/Sign_up.png')}
        style={styles.image}
      />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.title}>Forgot Password</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={forgotPassword}>
          <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>

        <Text style={styles.linkLabel}>
          Do you want to return to
          <Link to="/LoginScreen">
            <Text style={styles.linkLabelBold}> Log In </Text>
          </Link>
          screen?
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen
