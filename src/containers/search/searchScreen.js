import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SearchInput from '../../components/search/searchInput'
import {scaleHeight, scaleSize} from "../../lib/styleAdaptation";


class SearchScreen extends Component {
    render(): React.ReactNode {
        return(
            <View>
                <View style={searchStyle.searchStyle}>
                    <SearchInput searchContainer={searchStyle.searchContainer} placeholderTxt={'搜索课程、讲师'} />
                    <TouchableOpacity activeOpacity={1} onPress={()=>{this.props.navigation.goBack()}}>
                        <Text>取消</Text>
                    </TouchableOpacity>
                </View>
                <Text>this is search</Text>
            </View>
        );
    }
}
const searchStyle = StyleSheet.create({
    searchStyle: {
        flexDirection: 'row',
        paddingHorizontal: scaleSize(15),
        paddingVertical: scaleHeight(8),
        width: scaleSize(375),
        alignItems: 'center',
    },
    searchContainer: {
        width: scaleSize(300),
        justifyContent: 'flex-start',
        marginRight: scaleSize(13),
        paddingLeft: scaleSize(16)
    }
})

export default  SearchScreen;
