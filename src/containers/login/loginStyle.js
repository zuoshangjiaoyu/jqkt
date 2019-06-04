import {scaleHeight, scaleSize, setSpText2} from "../../lib/styleAdaptation";
import { StyleSheet } from 'react-native';
import BaseStyle from '../../lib/baseStyle';
const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseStyle.themeColor,
    },
    logoContainer: {
        alignSelf: 'center',
        marginTop: scaleHeight(40)
    },
    logoImgStyle: {
        width: scaleSize(70),
        height: scaleSize(70),
        marginBottom: scaleHeight(13),
        backgroundColor: '#fff',
        borderRadius: scaleSize(70),
    },
    logoTxt: {
        fontSize: setSpText2(20),
        fontFamily: 'PingFang-SC-Bold',
        fontWeight: 'bold',
        color: 'rgba(52,57,78,1)',
        lineHeight: scaleHeight(36)
    },
    testStyle: {
        width: scaleSize(70),
        height: scaleSize(70),
        backgroundColor: '#fff',
        borderRadius: scaleSize(70)
    }
})

export default LoginStyle;
