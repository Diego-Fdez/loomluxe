import { useState } from 'react'
import {
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import { useAuth } from '../hooks'
import { styles } from '../styles/LoginForm.styles'

const SignUpForm = () => {
  const height = Dimensions.get('window').height

  const { name, setName, email, setEmail, password, setPassword, signup } =
    useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="John"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={[styles.label, { marginTop: normalize(11, 'height') }]}>
        Email
      </Text>
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
            <Entypo name="eye" size={24} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={signup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </>
  )
}

export default SignUpForm
