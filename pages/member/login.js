import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Join extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    source={require('../../image/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.formText}>이메일 주소</Text>
                <TextInput style={styles.formControl} placeholder="예시) samil@samil.com" required/>
                
                <Text style={styles.formText}>비밀번호</Text>
                <TextInput secureTextEntry={true} style={styles.formControl} placeholder="비밀번호" required/>
                <Button title="로그인"
                    buttonStyle={{
                    backgroundColor: "#fff",
                    width: 300,
                    height: 45,
                    borderColor: "#000",
                    borderWidth: 0,
                    borderRadius: 5
                    }}
                    onPress={function(){ alert('asd') }}
                />
                <Text onPress={Actions.Join}>회원가입</Text>
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
    backgroundColor: '#fff',
    color: '#000',
    borderBottomWidth :0,
    borderBottomColor: '#000',
    borderRadius: 5,
  },
  formText: {
    fontWeight: 'bold'
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: '15%'
  },
  formBtn: {
    height: 40,
    backgroundColor: '#000',
    color: '#fff',
    padding: 10
  },
  btnGroup: {
    width: '20%',
    height: 40,
    justifyContent: 'center'
  }
});