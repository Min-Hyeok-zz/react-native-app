import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import { createTransition, FlipX } from 'react-native-transition';

memberJoin = () => {
    alert('회원가입 되따')
}

const Transition = createTransition(FlipX)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./image/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.formText}>이메일 주소</Text>
        <TextInput style={styles.formControl} placeholder="예시) samil@samil.com" required/>
        
        <Text style={styles.formText}>비밀번호</Text>
        <TextInput secureTextEntry={true} style={styles.formControl} placeholder="비밀번호" required/>

        <Button title="전송" style={styles.formBtn} required/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    width: '60%',
    height: 40,
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
  formText: {
    fontWeight: 'bold'
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: '25%'
  },
  formBtn: {
    flex: 1,
    width: '60%',
    height: 40,
    backgroundColor: '#000',
    color: '#fff'
  }
});
