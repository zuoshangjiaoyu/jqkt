import React, { Component } from 'react';
import  indexStyle from './indexStyle';
import BannerComponent from '../../components/banner/bannerComponent';
import FileUpload from "../../components/upload/fileUpload";
import MapScreen from '../../components/map/mapScreen';
import AliPay from '../../components/payment/aliPay'
import {
    Text,
    View,
    Alert,
    ScrollView,
    TouchableOpacity,
    Modal,
    Button
} from 'react-native';
import ShowToast from "../../components/showToast/showToast";

class IndexScreen extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            searchIcon: require('../../images/search_icon.png'),
            isShow: false,
            modal: false
        };
    }
    changeShowToast (){
        this.setState({
            isShow: false
        })
    }
    _aliPay() {
        let data = '1234';
        AliPay.pay(data)
    }
    render(): React.ReactNode {
        console.log(['indexScreen',this.state.isShow])
        return (
            <View>
                <ScrollView
                >
                    <ShowToast isShow={this.state.isShow} changeToast={this.changeShowToast.bind(this)}/>

                    <TouchableOpacity onPress={()=> this.setState({
                        isShow: true
                    })}>
                        <Text >调用showToast</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._aliPay}>
                        <Text >调用支付宝支付</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }
}

export default IndexScreen;

