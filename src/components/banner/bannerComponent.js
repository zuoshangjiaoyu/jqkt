import React, { Component } from 'react';
import {Image, Dimensions,} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import bannerStyle from './bannerStyle'

export default class CarouselExample extends Component {

    constructor(props) {
        super(props);
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    render() {
        return (
            <Carousel
                delay={2000}
                style={bannerStyle.bannerSize}
                autoplay={true}
                pageInfo={false}
                onAnimateNextPage={(p) => console.log(p)}
                bullets={true}
                bulletStyle={bannerStyle.bulletOneStyle}
                chosenBulletStyle={bannerStyle.chooseBulletStyle}
            >
                <Image resizeMode='stretch' style={bannerStyle.imageSize} source={require('../../images/testTwo.png')} />
                <Image resizeMode='stretch' style={bannerStyle.imageSize} source={require('../../images/testOne.png')} />
            </Carousel>

        );
    }
}
