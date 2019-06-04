import { StyleSheet } from 'react-native';
import {scaleHeight, setSpText2, scaleSize } from "../../lib/styleAdaptation";


const indexStyle = StyleSheet.create({
    searchInput: {
        paddingHorizontal: scaleSize(15),
        paddingVertical: scaleHeight(8),
    },
    placeholderFontStyle: {
        fontSize: setSpText2(14),
        fontFamily: 'PingFang-SC-Medium',
        fontWeight: '500',
        color:'rgba(136,136,136,1)',
        margin: 0,
        padding: 0
    },
    inputContainer: {
        backgroundColor: '#F0F1F2FF',
        borderRadius: scaleSize(16),
    },
    uploadFileStyle: {

    }
})

export default indexStyle;
