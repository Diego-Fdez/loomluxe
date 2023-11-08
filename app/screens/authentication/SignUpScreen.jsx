import {
  Text,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
} from 'react-native'
import { Link } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import { SignInOptions, SignUpForm } from './components'
import { styles } from './styles/LoginScreen.styles'
import { userStore } from '../../store'
import { SpinnerScreen } from '../../components'

const SignUpScreen = () => {
  const { height } = Dimensions.get('window')
  const isLoading = userStore((state) => state.isLoading)

  if (isLoading) return <SpinnerScreen />

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={require('../../../assets/Sign_up.png')}
        style={styles.image(height)}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}
        contentContainerStyle={{ paddingBottom: normalize(20, 'height') }}
      >
        <Text style={styles.title}>Create account</Text>

        <SignUpForm />

        <SignInOptions />

        <Text style={styles.linkText}>
          Already a member?
          <Link to="/LoginScreen">
            <Text style={styles.linkTextBlack}> Log In</Text>
          </Link>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen
