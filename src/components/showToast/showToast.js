import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {scaleHeight, scaleSize} from "../../lib/styleAdaptation";
class ShowToast extends Component {
    static propTypes ={
        isShow: PropTypes.bool,
        changeToast: PropTypes.func
    }
    constructor (props) {
        super(props)
    }

    rendChangeToast () {
        if (this.props.changeToast === undefined) return;
        return this.props.changeToast();
    }
    render(): React.ReactNode {
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                onRequestClose={() => console.log('onRequestClose...')}
                visible={this.props.isShow}
            >
                <View style={styles.toastContainer}>
                <TouchableOpacity
                    onPress={this.rendChangeToast.bind(this)}
                    style={styles.toastMark}>
                    <View style={styles.toastContent}>
                        <Image style={styles.imageSize} resizeMode={'contain'} source={require('../../images/success.png')} />
                        <Text>晒不干今天的衣裳</Text>
                    </View>
                </TouchableOpacity>
                </View>

            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    toastContainer: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    toastMark:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toastContent:{
        width: scaleSize(235),
        height: scaleHeight(193),
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: scaleSize(10)
    },
    imageSize: {
        width: scaleSize(58),
        height: scaleHeight(58),
        marginBottom: scaleHeight(20)
    }

})

export default ShowToast;
