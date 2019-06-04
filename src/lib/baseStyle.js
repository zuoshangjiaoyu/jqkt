import {StyleSheet} from "react-native";
import Dimen from './dimen';
import {Platform} from 'react-native';
import deviceInfo from './deviceInfo';
const BaseStyle = {
    /** color **/
    clear: 'transparent',

    /** 主题色 **/
    themeColor: '#f2f5f7',

    // 默认文本主色调 (黄)
    textMainColor: '#F0B95BFF',
    // 默认背景颜色
    bgColor: '#f2f3f5ff',
    // 默认背景辅颜色 (HOT)
    bgFuColor: '#F54E36FF',
    // 默认标题第一级颜色 （黑）
    textTitleColor: '#333333FF',
    // 默认标题第一级半颜色
    textFirstTitleColor: '#3A3A3AFF',
    //  默认标题第二级颜色
    textSecTitleColor: '#666666FF',
    //  默认标题第二级颜色
    textThirdTitleColor: '#999999FF',
    // 默认红色颜色
    redColor: '#F54E36FF',
    // 默认分割线颜色
    lineColor: 'rgba(0,0,0,0.1)',
    // 默认placeholder颜色
    placeholderTextColor: '#c8c8cd',


    /** space **/
    // 上边距
    marginTop: 10,
    // 左边距
    marginLeft: 10,
    // 下边距
    marginBotton: 10,
    // 右边距
    marginRight: 10,
    // 内边距
    padding: 10,
    // 左padding
    paddingLeft: 15,
    // 导航的leftItem的左间距
    navMarginLeft: 15,
    // 导航的rightItem的右间距
    navMarginRight: 15,

    /** width **/
    // 导航栏左右按钮image宽度
    navImageWidth: 25,
    // 边框线宽度
    borderWidth: 1,
    // 分割线高度
    lineWidth: 0.8,

    /** height **/
    // 导航栏的高度
    navHeight: Platform.OS === 'ios' ? (deviceInfo.isIphoneX ? 88 : 64) : 56,
    // 导航栏顶部的状态栏高度
    navStatusBarHeight: Platform.OS === 'ios' ? (deviceInfo.isIphoneX ? 44 : 20) : 0,
    // 导航栏除掉状态栏的高度
    navContentHeight: Platform.OS === 'ios' ? 44 : 56,
    // tabBar的高度
    tabBarHeight: Platform.OS === 'ios' ? (deviceInfo.isIphoneX ? 83 : 49) : 49,
    // 底部按钮高度
    bottonBtnHeight: 44,
    // 通用列表cell高度
    cellHeight: 44,
    // 导航栏左右按钮image高度
    navImageHeight: 25,

    /** font **/
    // 默认文字字体
    textFont: 14,
    // 默认按钮文字字体
    btnFont: 15,
    btnFontSmall: 13,
    // 导航title字体
    navTitleFont: 17,
    // tabBar文字字体
    barBarTitleFont: 12,
    // 占位符的默认字体大小
    placeholderFont: 13,
    // 导航左按钮的字体
    navRightTitleFont: 15,
    // 导航右按钮字体
    navLeftTitleFont: 15,

    /** opacity **/
    // mask
    modalOpacity: 0.3,
    // touchableOpacity
    taOpacity: 0.1,

    /** 定位 **/
    absolute: 'absolute',

    /** flex **/
    around: 'space-around',
    between: 'space-between',
    center: 'center',
    row: 'row',
};

export default BaseStyle;
