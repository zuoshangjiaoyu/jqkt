import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
} from 'react-navigation';
import { Button } from 'react-native';
//首页
import HomeScreen from '../containers/home/indexScreen';
// 思维课
import ThinkScreen from '../containers/thinking/thinkScreen';
import ThinkIntroductionScreen from '../containers/thinking/thinkIntroductionScreen';
import SearchScreen from '../containers/search/searchScreen';
import LoginScreen from '../containers/login/loginScreen'
/**
 * 引导页
 */
import SplashContainer from '../containers/splash/splashContainer';


/**
 * 主页面Stack 侧滑效果(抽屉)
 */
const MainStack = createDrawerNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: 'Home',
        drawerWidth: deviceParameter.pw * 0.7,
        contentComponent: HomeScreen,
        backBehavior: 'initialRoute',
    }
);

/**
 * 主stack
 * @type {NavigationContainer}
 */
const RootStack = createStackNavigator({
    // Splash: {
    //     screen: SplashContainer,
    //     navigationOptions: {
    //         header: null,
    //     },
    // },
    Main: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        },
    },
    Think: {
        screen: ThinkScreen,
        navigationOptions: {
            header: null
        },
    },
    ThinkIntroduction: {
        screen: ThinkIntroductionScreen,
        navigationOptions: {
            header: null
        },
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            header: null
        },
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        },
    },
})
const AppNavigator = createStackNavigator({
    Root: RootStack,
},{
    initialRouteName: 'Root',
    mode: 'modal',
    headerMode: 'none',
})
export {AppNavigator};
