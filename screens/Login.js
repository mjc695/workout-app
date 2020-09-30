import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button, AsyncStorage } from 'react-native';
import user, { auth } from '../store/user';
import { connect } from 'react-redux';
// import { TextInput } from 'react-native-gesture-handler';

export function LoginScreen(props) {
  // console.log('props', props)

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function handleUserChange(event) {
    setUserName(event)
  }
  function handlePasswordChange(event) {
    setPassword(event)
  }

  async function handleSubmit() {
    // submit onto server
    console.log('userName:', userName, 'password:', password)
    await props.submit(userName, password, 'login')
    console.log('submitting')
    setUserName('')
    setPassword('')
    await AsyncStorage.setItem('userToken', 'abc')
    props.navigation.navigate('App')
  }

  return (
    < View >
      <View>
        {/* <Text> LETS LOG IN HERE</Text> */}
      </View>
      <View>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, margin: '5%', height: '18%' }}
          onChangeText={handleUserChange}
          value={userName}
          placeholder='username'
        ></TextInput>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, margin: "5%", height: '18%' }}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
          placeholder='password'
          textContentType='password'
        ></TextInput>
      </View>
      <Button title='click me' onPress={handleSubmit} />
      <Button title='Go Home' onPress={() => props.navigation.navigate('App')} />
    </View >
  )
}

const mapDispatch = dispatch => ({
  submit(email, password, method) {
    dispatch(auth(email, password, method))
  }
})

export default connect(null, mapDispatch)(LoginScreen)
