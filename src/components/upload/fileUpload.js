import React from 'react';
import {
    AppRegistry,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {scaleHeight, scaleSize} from "../../lib/styleAdaptation";

export default class FileUpload extends React.Component {
    state = {
        avatarSource: null,
        videoSource: null,
    };

    constructor(props) {
        super(props);

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
        this.selectVideoTapped = this.selectVideoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium',
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({
                    videoSource: response.uri,
                });
            }
        });
    }

    render() {
        return (
            <View>
                {this.props.bigUpload ?
                    (
                        <View style={[styles.uploadIcon,styles.uploadSmallIcon]}>
                            <Image style={styles.addSmallImg} resizeMode={'stretch'} source={require('../../images/add-small.png')}/>
                        </View>
                    ):
                    (
                        <View style={[styles.uploadIcon,styles.uploadBigIcon]}>
                            <Image style={styles.addSmallImg} resizeMode={'stretch'} source={require('../../images/add-small.png')}/>
                        </View>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    uploadIcon: {
        backgroundColor: '#F5F6F7FF',
        borderRadius: scaleSize(3),
        borderWidth: scaleSize(1),
        borderStyle: 'solid',
        borderColor: '#E3E4E6FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadSmallIcon: {
        width: scaleSize(77),
        height: scaleHeight(83),
    },
    uploadBigIcon: {
        width: scaleSize(177),
        height: scaleHeight(83),
    },
    addSmallImg: {
      width: scaleSize(22),
      height: scaleHeight(22)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
    },
});
