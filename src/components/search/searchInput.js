import React, { Component } from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import {scaleHeight, setSpText2, scaleSize } from "../../lib/styleAdaptation";
import PropTypes from 'prop-types';
// import searchStyle from './searchStyle'

class SearchInput extends Component {
    static propTypes = {
        whereToGo: PropTypes.func,
        canNavigate: PropTypes.bool,
        placeholderTxt: PropTypes.string,
        inputStyle: PropTypes.object,
        searchContainer: PropTypes.object
    };
    constructor (props){
        super(props)
    }
    renderNavigationToSearch() {
        if (this.props.whereToGo === undefined) return;
        return this.props.whereToGo();
    }
    render(): React.ReactNode {
        return (
            <View style={[inputStyle.inputContainer,this.props.searchContainer]}>
                <Image style={inputStyle.searchIcon} source={require('../../images/search_icon.png')} resizeMode={'stretch'}/>
                {this.props.canNavigate &&
                    <TouchableOpacity onPress={()=>{this.renderNavigationToSearch()}} >
                        <Text>{this.props.placeholderTxt}</Text>
                    </TouchableOpacity>
                }
                {!this.props.canNavigate &&
                    <TextInput
                        placeholder={this.props.placeholderTxt}
                        style={[inputStyle.placeholderFontStyle]}
                    />
                }
            </View>
        );
    }
}

const inputStyle = StyleSheet.create({
    inputContainer: {
        height: scaleHeight(32),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F1F2FF',
        borderRadius: scaleSize(16),
    },
    searchIcon: {
        width: scaleSize(15),
        height: scaleHeight(16),
        marginRight: scaleSize(6)
    },
    placeholderFontStyle: {
        fontSize: setSpText2(14),
        fontFamily: 'PingFang-SC-Medium',
        fontWeight: '500',
        color:'rgba(136,136,136,1)',
        margin: 0,
        padding: 0
    },
})
export default SearchInput;
