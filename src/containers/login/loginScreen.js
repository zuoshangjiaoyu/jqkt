import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import loginStyle from './loginStyle';

class LoginScreen extends Component {
    render(): React.ReactNode {
        return (
            <View style={loginStyle.container}>
                <View style={loginStyle.logoContainer}>
                    <Image roundAsCircle={true} style={loginStyle.logoImgStyle}  source={require('../../images/logo.png')}/>
                    <Text style={loginStyle.logoTxt}>佐商学院</Text>
                </View>
            </View>
        );
    }
}

export default LoginScreen;
