import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, Appearance, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Colors } from '../../styles';

const _widthHeader = Dimensions.get('screen').width * 0.15;
const _widthImage = Dimensions.get('screen').width * 0.7;
//const colorScheme = Appearance.getColorScheme();
const colorScheme = "dark";

const LoginInfoScreen = () => {
    const [done, onDone] = useState(false);

    let BACKGROUND_COLOR_DEFAULT = Colors.WHITE;
    let BACKGROUND_COLOR_SECOND = Colors.BRAND_COLOR_LIGHT_100;
    let BACKGROUND_COLOR_THIRD = Colors.BRAND_COLOR_LIGHT_200;
    let BACKGROUND_COLOR_FOURTH = Colors.BRAND_COLOR_LIGHT_300;
    let BACKGROUND_COLOR_FIFTH = Colors.BRAND_COLOR_LIGHT_400;

    let TEXT_COLOR_PRIMARY = Colors.BLACK;
    let TEXT_COLOR_SECONDARY = Colors.BRAND_COLOR_LIGHT_400;

    let NEXT_BTN = Colors.INFORMATION_DEFAULT;
    let GOOGLE_BTN = Colors.WHITE;
    let TEXT_NEXT_BTN = Colors.WHITE;
    let TEXT_GOOGLE_BTN = Colors.BRAND_COLOR_LIGHT_400;

    let DOT_COLOR = Colors.BRAND_COLOR_LIGHT_200;

    let image1 = require("../../assets/images/info/1_light.png");
    let image2 = require("../../assets/images/info/2_light.png");
    let image3 = require("../../assets/images/info/3_light.png");

    if (colorScheme === 'dark') {
        // Use dark color scheme
        BACKGROUND_COLOR_DEFAULT = Colors.BRAND_COLOR_DARK_900;
        BACKGROUND_COLOR_SECOND = Colors.BRAND_COLOR_DARK_800;
        BACKGROUND_COLOR_THIRD = Colors.BRAND_COLOR_DARK_700;
        BACKGROUND_COLOR_FOURTH = Colors.BRAND_COLOR_DARK_600;
        BACKGROUND_COLOR_FIFTH = Colors.BRAND_COLOR_DEFAULT;

        TEXT_COLOR_PRIMARY = Colors.WHITE;

        GOOGLE_BTN = Colors.BRAND_COLOR_LIGHT_200;
        TEXT_GOOGLE_BTN = Colors.BLACK;

        DOT_COLOR = Colors.WHITE;

        // TO BE CHANGED
        image1 = require("../../assets/images/info/1_dark.png");
        image2 = require("../../assets/images/info/2_dark.png");
        image3 = require("../../assets/images/info/3_dark.png");
    }
    
    const colorStyle = StyleSheet.create({
        backgroundColorDefault: {
            backgroundColor: BACKGROUND_COLOR_DEFAULT,
        },
        backgroundColorSecond: {
            backgroundColor: BACKGROUND_COLOR_SECOND,
        },
        backgroundColorThird: {
            backgroundColor: BACKGROUND_COLOR_THIRD,
        },
        backgroundColorFourth: {
            backgroundColor: BACKGROUND_COLOR_FOURTH,
        },
        backgroundColorFifth: {
            backgroundColor: BACKGROUND_COLOR_FIFTH,
        },
        textColorPrimary: {
            color: TEXT_COLOR_PRIMARY,
        },
        textColorSecondary: {
            color: TEXT_COLOR_SECONDARY,
        },
        btnColorNext: {
            backgroundColor: NEXT_BTN
        },
        btnColorGoogle: {
            backgroundColor: GOOGLE_BTN,
        },
        btnNextTextColor: {
            color: TEXT_NEXT_BTN
        },
        btnGoogleTextColor: {
            color: TEXT_GOOGLE_BTN
        }
    })

    const slides = [
        {
          key: 1,
          image: image1,
          title: "Welcome to Tickme!",
          sub: "We are a service application to manage your ticket without charging any fees, enjoy your hobby freely."
        },
        {
          key: 2,
          image: image2,
          title: "Find nearby event",
          sub: "We are a service application to manage your ticket without charging any fees, enjoy your hobby freely."
        },
        {
          key: 3,
          image: image3,
          title: "Stay Update",
          sub: "You can follow updates about the events that you will be participating in. This can make it easier for you to manage your events."
        }
    ];

    const renderItem = ({ item }) => {
        return (
          <SafeAreaView style={styles.renderItemContainer}>
            <Image source={item.image} style={{width: _widthImage, height: _widthImage, resizeMode: "contain"}}/>
            <Text style={[colorStyle.textColorPrimary, {fontSize: 20, fontWeight: "bold", margin: 10}]}>{item.title}</Text>
            <Text style={[colorStyle.textColorSecondary, {textAlign: "center", margin: 10}]}>{item.sub}</Text>
          </SafeAreaView>
        );
    }

    const keyExtractor = (item) => item.title;

    const _renderPagination = (activeIndex) => {
        return (
          <View style={styles.paginationContainer}>
            <SafeAreaView>
                <View style={styles.paginationDots}>
                    {slides.length > 1 &&
                        slides.map((_, i) => (
                        <TouchableOpacity
                            key={i}
                            style={[
                                styles.dot,
                                i === activeIndex
                                ? {backgroundColor: Colors.INFORMATION_DEFAULT}
                                : {backgroundColor: DOT_COLOR},
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[colorStyle.btnColorNext, styles.button]}
                    >
                        <View style={styles.buttonTextContainer}>
                            <Text style={[colorStyle.btnNextTextColor, styles.buttonText]}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[colorStyle.btnColorGoogle, styles.button, {borderWidth: StyleSheet.hairlineWidth}]}
                    >
                        <View style={[styles.buttonTextContainer]}>
                            <Icon name="google" size={20} style={[colorStyle.textColorSecondary, {marginRight: 10, alignSelf: "center"}]}/>
                            <Text style={[colorStyle.btnGoogleTextColor, styles.buttonText]}>Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
          </View>
        );
    };

    return(
        <View style={[colorStyle.backgroundColorDefault, {flex: 1}]}>
            <SafeAreaView style={{flexDirection: "row", justifyContent: "center"}}>
                <Image
                    style={{width: _widthHeader, height: _widthHeader, resizeMode: "contain"}}
                    source={require("../../assets/images/logo.png")}
                />
                <Text style={[colorStyle.textColorPrimary, {fontSize: 20, fontWeight: "bold", alignSelf:"center", margin: 10}]}>Tickme</Text>
            </SafeAreaView>

            <AppIntroSlider 
                renderItem={renderItem} 
                data={slides}
                keyExtractor={keyExtractor}
                onDone={() => onDone(true)}
                renderPagination={_renderPagination}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center"
    },
    button: {
        margin: 10,
        borderRadius: 20,
        alignItems: "center",
        width: "80%"
    },
    buttonText: {
        fontSize: 20,
        alignSelf: "center"
    },
    buttonTextContainer: {
        margin: 10,
        flexDirection: "row",
        borderRadius: 20,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    renderItemContainer: {
        alignItems: "center"
    }
})

export default LoginInfoScreen;