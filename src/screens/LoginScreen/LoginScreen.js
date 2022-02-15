import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { View, StyleSheet } from 'react-native'

import Text from 'comp/Text'
import InputGroup from 'comp/InputGroup'
import Button from 'comp/Button'

const LoginScreen = () => {
  const [email, set_email] = useState('')
  const [password, set_password] = useState('')

  const handleSignUp = async () => {
    const auth = getAuth()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  return (
    <View style={styles.container}>
      <InputGroup
        label="Email Address"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChangeText={set_email}
        style={styles.input}
      />
      <InputGroup
        label="Password"
        type="password"
        value={password}
        onChangeText={set_password}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        returnKeyType="go"
        style={styles.input}
      />
      <Button label="Sign Up" onPress={handleSignUp} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
})

export default LoginScreen
