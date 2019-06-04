import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import {scaleSize, setSpText2, ifIphoneX, scaleHeight} from "../../lib/styleAdaptation"; //公共类

export default class TopScreen extends Component {
    static propTypes = {
        leftItem: PropTypes.func,
        title: PropTypes.string,
        rightTxt: PropTypes.string,
        rightItem: PropTypes.func,
    };
    constructor(props){
        super(props);
    }
    renderLeftItem(){
        if (this.props.leftItem === undefined) return;
        return this.props.leftItem();
    }
    renderRightItem(){
        if (this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }
    render() {
        let statusBar = Platform.select({
            ios: ifIphoneX() ? 44 : 20,
            android: 0,
        });
        return (
            <View style={[ styles.header, {margin: 0, paddingTop: statusBar, height: statusBar + 44}]}>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.renderLeftItem()}}>
                    <View style={styles.headerReturnIcon}>
                        <Text> { '<' } </Text>
                    </View>
                </TouchableOpacity>
                <Text style={this.props.rightTxt ? styles.title : styles.centerTitle}>
                    {this.props.title}
                </Text>
                {this.props.rightTxt &&
                    <TouchableOpacity onPress={()=>{this.renderRightItem()}}>
                        <View style={styles.doneText}>
                            <Text>{this.props.rightTxt}</Text>
                        </View>
                    </TouchableOpacity>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({

    header:  {
        flexDirection: 'row',
        paddingHorizontal: scaleHeight(15),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFFFF'
    },
    headerNoRight: {
        flexDirection: 'row',
        paddingHorizontal: scaleHeight(15),
    },
    headerReturnIcon: {
        justifyContent: 'flex-start',
        textAlign: 'left'
    },
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: setSpText2(18),
        fontFamily: 'PingFang-SC-Bold',
        fontWeight: 'bold',
        color: '#333333FF'
    },
    centerTitle: {
        width:scaleSize(335),
        textAlign: 'center',
        fontSize: setSpText2(18),
        fontFamily: 'PingFang-SC-Bold',
        fontWeight: 'bold',
        color: '#333333FF'
    },
    doneText: {
        justifyContent: 'flex-end',
        textAlign: 'right',
        fontSize: setSpText2(17),
        fontFamily: 'PingFang-SC-Medium',
        fontWeight: '500',
        color: '#333333FF'
    }
});
