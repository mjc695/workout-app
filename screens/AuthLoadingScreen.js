import React from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.getUserToken()
  }

  getUserToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    console.log('userToken:', userToken)
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View>
        {}
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

export default AuthLoadingScreen
