import { StyleSheet } from 'react-native';
import {scaleHeight, setSpText2, scaleSize } from "../../lib/styleAdaptation";


const bannerStyle = StyleSheet.create({
    bannerSize: {
        height: scaleHeight(155),
    },
    imageSize: {
        width: scaleSize(375),
        height: scaleHeight(155),
    },
    bulletOneStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        borderColor: '#dddddd',
        backgroundColor: '#dddddd',
    },
    chooseBulletStyle: {
        width: 11,
        height: 5,
        borderRadius: 2,
        backgroundColor: '#ffffff'
    }
})

export default bannerStyle;
