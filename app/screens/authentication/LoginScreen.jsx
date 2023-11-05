import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
  Platform,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { LoginForm, SignInOptions } from './components'
import { userStore } from '../../store'
import { SpinnerScreen } from '../../components'
import { styles } from './styles/LoginScreen.styles'

const LoginScreen = () => {
  const { height } = Dimensions.get('window')
  const isLoading = userStore((state) => state.isLoading)

  if (isLoading) return <SpinnerScreen />

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={require('../../../assets/Log_in.png')}
        style={styles.image(height)}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome back</Text>

        <LoginForm />

        <SignInOptions />

        <Text style={styles.linkText}>
          Don&#39;t have an account?
          <Link to="/SignUpScreen">
            <Text style={styles.linkTextBlack}> Sign up</Text>
          </Link>
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
