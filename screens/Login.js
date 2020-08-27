import * as WebBrowser from 'expo-web-browser'
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import user from '../store/user';
// import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function handleUserChange(event) {
    setUserName(event)
  }
  function handlePasswordChange(event) {
    setPassword(event)
  }

  function handleSubmit() {
    // submit onto server
    console.log('submitting')
  }

  return (
    <View>
      <View>
        <Text> LETS LOG IN HERE</Text>
      </View>
      <View>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, margin: '5%', height: '18%' }}
          onChangeText={handleUserChange}
          placeholder='username'
        ></TextInput>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, margin: "5%", height: '18%' }}
          onChangeText={handlePasswordChange}
          placeholder='password'
          textContentType='password'
        ></TextInput>
      </View>
      <Button title='click me' onPress={handleSubmit} />
    </View>
  )
}
