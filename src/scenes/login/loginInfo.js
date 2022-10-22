import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, Appearance, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '../../styles';

const _width = Dimensions.get('screen').width * 0.15;
const colorScheme = Appearance.getColorScheme();

const LoginInfoScreen = () => {
    const [done, onDone] = useState(false);

    let BACKGROUND_COLOR_DEFAULT = Colors.WHITE;
    let BACKGROUND_COLOR_SECOND = Colors.BRAND_COLOR_LIGHT_100;
    let BACKGROUND_COLOR_THIRD = Colors.BRAND_COLOR_LIGHT_200;
    let BACKGROUND_COLOR_FOURTH = Colors.BRAND_COLOR_LIGHT_300;
    let BACKGROUND_COLOR_FIFTH = Colors.BRAND_COLOR_LIGHT_400;

    let TEXT_COLOR_PRIMARY = Colors.BLACK;
    let TEXT_COLOR_SECONDARY = Colors.BRAND_COLOR_LIGHT_400;

    if (colorScheme === 'dark') {
        // Use dark color scheme
        BACKGROUND_COLOR_DEFAULT = Colors.BRAND_COLOR_DARK_900;
        BACKGROUND_COLOR_SECOND = Colors.BRAND_COLOR_DARK_800;
        BACKGROUND_COLOR_THIRD = Colors.BRAND_COLOR_DARK_700;
        BACKGROUND_COLOR_FOURTH = Colors.BRAND_COLOR_DARK_600;
        BACKGROUND_COLOR_FIFTH = Colors.BRAND_COLOR_DEFAULT;

        TEXT_COLOR_PRIMARY = Colors.WHITE;
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
        }
    })

    const slides = [
        {
          key: 1,
          title: "one",
        },
        {
          key: 2,
          title: "two",
        },
        {
          key: 3,
          title: "three",
        }
    ];

    const renderItem = ({ item }) => {
        return (
          <SafeAreaView>
            <View>
                <Text style={[colorStyle.textColorPrimary]}>{item.title}</Text>
            </View>
          </SafeAreaView>
        );
    }

    return(
        <View style={[colorStyle.backgroundColorDefault, {flex: 1}]}>
            <SafeAreaView style={{flexDirection: "row", justifyContent: "center"}}>
                <Image
                    style={{width: _width, height: _width, resizeMode: "contain"}}
                    source={require("../../assets/images/logo.png")}
                />
                <Text style={[colorStyle.textColorPrimary, {fontSize: 20, fontWeight: "bold", alignSelf:"center", margin: 10}]}>Tickme</Text>
            </SafeAreaView>

            <AppIntroSlider 
                renderItem={renderItem} 
                data={slides} 
                onDone={() => onDone(true)} 
                showNextButton={false} 
                showDoneButton={false}
            />

            <SafeAreaView style={{alignItems: "center"}}>
                <Image
                    style={{width: _width, height: _width, resizeMode: "contain"}}
                    source={require("../../assets/images/logo.png")}
                />
                <Text style={[colorStyle.textColorPrimary, {fontSize: 20, fontWeight: "bold", alignSelf:"center", margin: 10}]}>Tickme</Text>
            </SafeAreaView>
        </View>
    )
};

export default LoginInfoScreen;