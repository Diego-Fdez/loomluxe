import { useState } from 'react'
import { Link } from '@react-navigation/native'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import { useAuth } from '../hooks'
import { styles } from '../styles/LoginForm.styles'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="loomis.b@gmail.com"
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={[styles.label, { marginTop: normalize(11, 'height') }]}>
        Password
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Minimum 8 characters"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handleShowPassword}
          style={styles.hideTextButton}
        >
          {showPassword ? (
            <Entypo name="eye" size={24} color="#114949" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="#114949" />
          )}
        </TouchableOpacity>
      </View>

      <Link to="/ForgotPasswordScreen" style={styles.link}>
        <Text style={styles.linkLabel}>Forgot password?</Text>
      </Link>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </>
  )
}

export default LoginForm
