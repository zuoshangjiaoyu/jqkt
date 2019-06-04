import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity, Button, TouchableHighlight} from 'react-native';
import thinkStyle from './thinkStyle';
import TopScreen from "../../components/topScreen/topScreen";

class ThinkScreen extends  Component {


    render(){
        return (
            <View>
                <TopScreen title={'思维课'} leftItem={() => this.props.navigation.goBack()} rightTxt={'课程介绍'} rightItem={() => {this.props.navigation.navigate('ThinkIntroduction')}} />
                <ScrollView
                    style={thinkStyle.container}
                >
                    <View style={thinkStyle.banner}>
                        <Image style={[thinkStyle.image]} resizeMode='stretch'  source={require('../../images/testOne.png')}  />
                    </View>
                    <View style={[thinkStyle.itemList]}>
                        <View style={[thinkStyle.item]} >
                            <TouchableOpacity activeOpacity={1}  onPress={()=>{this.props.navigation.navigate('Think')}}>
                                <Image style={[thinkStyle.itemImage]} resizeMode='stretch'  source={require('../../images/testOne.png')} />
                                <Text style={[thinkStyle.itemSee]}>580人观看</Text>
                                <View style={[thinkStyle.itemContent]}>
                                    <Text style={[thinkStyle.itemTitle]}>变现商学院的价值</Text>
                                    <Text style={[thinkStyle.itemName]}>李攀 | 变现商学院创始人</Text>
                                    <View style={[thinkStyle.itemSign]}>
                                        <Text style={[thinkStyle.itemSignText]}>供应链</Text>
                                        <Text style={[thinkStyle.itemSignText]}>资源优化</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[thinkStyle.item]}>
                            <Image style={[thinkStyle.itemImage]} resizeMode='stretch'  source={require('../../images/testOne.png')} />
                            <Text style={[thinkStyle.itemSee]}>2万人观看</Text>
                            <View style={[thinkStyle.itemContent]}>
                                <Text style={[thinkStyle.itemTitle]}>变现商学院的价值</Text>
                                <Text style={[thinkStyle.itemName]}>李攀 | 变现商学院创始人</Text>
                                <View style={[thinkStyle.itemSign]}>
                                    <Text style={[thinkStyle.itemSignText]}>供应链</Text>
                                    <Text style={[thinkStyle.itemSignText]}>资源优化</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[thinkStyle.item]}>
                            <Image style={[thinkStyle.itemImage]} resizeMode='stretch'  source={require('../../images/testOne.png')} />
                            <Text style={[thinkStyle.itemSee]}>2千人观看</Text>
                            <View style={[thinkStyle.itemContent]}>
                                <Text style={[thinkStyle.itemTitle]}>变现商学院的价值</Text>
                                <Text style={[thinkStyle.itemName]}>李攀 | 变现商学院创始人</Text>
                                <View style={[thinkStyle.itemSign]}>
                                    <Text style={[thinkStyle.itemSignText]}>供应链</Text>
                                    <Text style={[thinkStyle.itemSignText]}>资源优化</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>


        );
    }
}
export default ThinkScreen;

