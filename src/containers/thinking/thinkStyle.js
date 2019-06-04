import { StyleSheet } from 'react-native';
import {scaleHeight, setSpText2, scaleSize } from "../../lib/styleAdaptation";


const thinkStyle = StyleSheet.create({
    headerBtn: {
        marginRight: scaleSize(15)
    },
    container: {
        backgroundColor: '#F2F5F7FF',
    },
    banner: {
        marginHorizontal: scaleSize(15),
        marginTop: scaleSize(10),
        marginBottom: scaleHeight(30)
    },
    image: {
        width: scaleSize(345),
        height: scaleHeight(149),
    },
    itemList: {
        marginLeft: scaleSize(15),
        marginRight: scaleSize(2),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#FFFFFFFF',
        borderRadius: scaleSize(3),
        paddingBottom: scaleHeight(33),
        marginRight: scaleSize(13),
        marginBottom: scaleSize(34),
        position: 'relative',
    },
    itemImage: {
        width: scaleSize(166),
        height: scaleHeight(112),
        borderRadius: scaleSize(3),
    },
    itemSee: {
        position: 'absolute',
        top: scaleHeight(93),
        right: scaleSize(9),
        fontSize: setSpText2(12),
        fontFamily: 'PingFang-SC-Bold',
        fontWeight: 'bold',
        color: '#FFFFFFFF'
    },
    itemContent: {
        paddingLeft: scaleSize(9),
        paddingTop: scaleSize(9)
    },
    itemTitle: {
        fontSize: setSpText2(16),
        fontFamily : 'PingFang-SC-Bold',
        fontWeight: 'bold',
        color: '#353535FF',
        marginBottom: scaleSize(8)
    },
    itemName: {
        fontSize: setSpText2(12),
        fontFamily:'PingFang-SC-Medium',
        fontWeight:'500',
        color: '#888888FF',
        marginBottom: scaleSize(11)
    },
    itemSign: {
        color: '#D08A12FF',
        flexDirection: 'row',
    },
    itemSignText: {
        fontSize: setSpText2(12),
        fontFamily:'PingFang-SC-Medium',
        fontWeight:'500',
        padding: scaleSize(4),
        backgroundColor: '#F6AC0EFF',
        borderRadius: scaleSize(3),
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: scaleSize(10),
    },
})

export default thinkStyle;
