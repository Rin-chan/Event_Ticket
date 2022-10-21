import React from 'react';
import { View, Text, Appearance, StyleSheet } from 'react-native';

import { LoadingComponent } from '../../components';

import { Colors } from '../../styles';

const HomeScreen = () => {
    const colorScheme = Appearance.getColorScheme();

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

    return (
        <View style={{flex: 1}}>
            <LoadingComponent colorStyle={colorStyle}/>
        </View>
    );
}

export default HomeScreen;