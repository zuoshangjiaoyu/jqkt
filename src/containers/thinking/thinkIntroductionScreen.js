import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity, Button, TouchableHighlight} from 'react-native';
import thinkStyle from './thinkStyle';
import TopScreen from "../../components/topScreen/topScreen";

class ThinkScreen extends  Component {

    render(){
        return (
            <View>
                <TopScreen title={'思维课程介绍'} leftItem={() => this.props.navigation.goBack()} />
                <ScrollView
                    style={thinkStyle.container}
                >
                </ScrollView>
            </View>


        );
    }
}
export default ThinkScreen;

