import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity} from 'react-native';
import fetchRequest from '../lib/request'


class HomeScreen extends  Component {
    constructor () {
        super()
        this.state =  {
            test: ''
        }
    }
    _pressButton() {
        // fetch('http://192.168.1.187:8181/wxapi/courses/',)
        //     .then((responseJson) =>{
        //         console.log(responseJson);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        fetchRequest('appApi/test','POST').then((res) =>{
            console.error(['res homeScreen',123])
            // this.setState({
            //     test: res.data.baseUrl
            // })
        })

    }
    render(): React.ReactNode {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this,1)} >
                    <Text>{this.state.test? this.state.test : 'this is home'}</Text>
                </TouchableOpacity>

                <Text>{this.state.test}</Text>
            </View>
        );

    }
}
export default HomeScreen;
