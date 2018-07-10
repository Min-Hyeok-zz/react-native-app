import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { Login, Join } from './pages/index'

memberJoin = () => {
    alert('회원가입 되따')
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial={true}/>
          <Scene key="Join" component={Join} title="Join"/>
        </Stack>
      </Router>
    )
  }
}