import React from 'react'
import { View, Button, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../store/user'

// class LogoutButton extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   async onSubmit() {
//     console.log('logging out, this:', props)
//     await logout()
//     await AsyncStorage.clear()
//     props.navigation.navigate('Auth')
//   }

//   render() {
//     return (
//       <View>
//         <Button title='Logout' onPress={this.onSubmit}> </Button>
//       </View>
//     )
//   }
// }

function LogoutButton(props) {

  async function onSubmit() {
    await logout()
    AsyncStorage.getItem('userToken') && await AsyncStorage.clear()
    props.props.navigate('Auth')
  }


  return (
    <View>
      <Button title='Logout' onPress={onSubmit}> </Button>
    </View>
  )
}

const mapDispatch = dispatch => ({
  logout: dispatch(logout())
})


export default connect(null, mapDispatch)(LogoutButton)
