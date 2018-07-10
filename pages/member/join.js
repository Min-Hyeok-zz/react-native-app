import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import { Sence, Router } from 'react-native-router-flux'

export default class Join extends React.Component{
    render(){
        return(
            <View style={style.content}>
                <Text>회원가입 페이지 입니다.</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})