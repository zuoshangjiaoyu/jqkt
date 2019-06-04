import React, { Component } from 'react';
import ActionSheet from 'react-native-general-actionsheet';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    Alert,
    ScrollView,
    ActionSheetIOS
} from 'react-native';
let lon = '121.2477511168';  // ---经度 121.248078
let lat = '31.0913734181';   // ---纬度 31.091769
let name = '上海松江王家厍路55弄';//
let UtilMapManager = NativeModules.UtilMap;
class MapScreen extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            searchIcon: require('../../images/search_icon.png')
        };
    }
    iosmap() {
        // console.error(Platform);
        let array = [];
        UtilMapManager.findEvents(lon, lat, name, (events) => {
            events.map((index, item) => {
                array.push(index.title);
            })
            if(Platform.OS === 'ios'){
                if (array.length > 2) {
                    ActionSheetIOS.showActionSheetWithOptions({
                            options: array,
                            cancelButtonIndex: array.length - 1,
                            maskClosable: true,
                        },
                        (buttonIndex) => {
                            //跳到原生方法对应的app地图导航内
                            UtilMapManager.addEvent(events[buttonIndex].title, events[buttonIndex].url, lon, lat, name);//lon是经度，，，log是维度
                        });
                } else if (array.length == 2) {
                    if (events.length == 2 && events[0].url == 'ios') {
                        //只针对ios平台
                        UtilMapManager.addEvent(events[0].title, events[0].url, lon, lat, name);
                    } else {
                        console.log(['android',array])
                        ActionSheetIOS.showActionSheetWithOptions({
                                options: array,
                                cancelButtonIndex: array.length - 1,
                                maskClosable: true,
                            },
                            (buttonIndex) => {
                                //跳到原生方法对应的app地图导航内
                                UtilMapManager.addEvent(events[buttonIndex].title, events[buttonIndex].url, lon, lat, name);//lon是经度，log是维度
                            });
                    }
                } else {//只适用于android平台
                    Alert.alert('没有可用的地图软件！');
                }
            }else {
                ActionSheet.useActionSheetIOS = false;
                ActionSheet.showActionSheetWithOptions({
                    options: array,
                    cancelButtonIndex: array.length - 1,
                    maskClosable: true,
                },(buttonIndex) => {
                    console.log(['buttonIndex',buttonIndex,lon,lat,name])
                    //跳到原生方法对应的app地图导航内
                    UtilMapManager.addEvent(events[buttonIndex].title, events[buttonIndex].url, lon, lat, name);//lon是经度，log是维度
                });
            }

        })

    }
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: 50 }} onPress={this.iosmap.bind(this)}>
                    <Text>打开导航软件</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default MapScreen;

