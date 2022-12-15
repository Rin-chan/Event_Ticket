import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, TouchableOpacity, SafeAreaView, Text, TextInput, StyleSheet, Appearance } from 'react-native';
import axios from "axios";

import { Colors } from '../../styles';
const colorScheme = Appearance.getColorScheme();

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    let BACKGROUND_COLOR_DEFAULT = Colors.WHITE;
    let BACKGROUND_COLOR_SECOND = Colors.BRAND_COLOR_LIGHT_100;
    let BACKGROUND_COLOR_THIRD = Colors.BRAND_COLOR_LIGHT_200;
    let BACKGROUND_COLOR_FOURTH = Colors.BRAND_COLOR_LIGHT_300;
    let BACKGROUND_COLOR_FIFTH = Colors.BRAND_COLOR_LIGHT_400;

    let LOGIN_BUTTON = Colors.INFORMATION_DEFAULT;
    let LOGIN_BUTTON_TEXT = Colors.WHITE;

    let TEXT_COLOR_PRIMARY = Colors.BLACK;
    let TEXT_COLOR_SECONDARY = Colors.BRAND_COLOR_LIGHT_400;

    let NEXT_BTN = Colors.INFORMATION_DEFAULT;
    let GOOGLE_BTN = Colors.INFORMATION_LIGHT_100;
    let TEXT_NEXT_BTN = Colors.WHITE;
    let TEXT_GOOGLE_BTN = Colors.INFORMATION_DARK_800;

    if (colorScheme === 'dark') {
        // Use dark color scheme
        BACKGROUND_COLOR_DEFAULT = Colors.BRAND_COLOR_DARK_900;
        BACKGROUND_COLOR_SECOND = Colors.BRAND_COLOR_DARK_800;
        BACKGROUND_COLOR_THIRD = Colors.BRAND_COLOR_DARK_700;
        BACKGROUND_COLOR_FOURTH = Colors.BRAND_COLOR_DARK_600;
        BACKGROUND_COLOR_FIFTH = Colors.BRAND_COLOR_DEFAULT;

        TEXT_COLOR_PRIMARY = Colors.WHITE;

        GOOGLE_BTN = Colors.INFORMATION_DARK_800;
        TEXT_GOOGLE_BTN = Colors.INFORMATION_LIGHT_100;

        DOT_COLOR = Colors.WHITE;
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
        btnLoginTextColor: {
            color: TEXT_NEXT_BTN
        },
        btnGoogleTextColor: {
            color: TEXT_GOOGLE_BTN
        },
        btnLogin: {
            backgroundColor: LOGIN_BUTTON
        },
        btnLoginText: {
            color: LOGIN_BUTTON_TEXT
        },
    })

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '432797909197-0k3bnuvkonmmeatnqof2tgecgeq79bsk.apps.googleusercontent.com',
        iosClientId: '432797909197-0k3bnuvkonmmeatnqof2tgecgeq79bsk.apps.googleusercontent.com',
        androidClientId: '432797909197-0k3bnuvkonmmeatnqof2tgecgeq79bsk.apps.googleusercontent.com',
        webClientId: '432797909197-0k3bnuvkonmmeatnqof2tgecgeq79bsk.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
            axios.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token='+authentication.accessToken)
                .then(function(response){
            })
          }
    }, [response]);

    return (
        <View style={[colorStyle.backgroundColorDefault, {flex: 1}]}>
            <SafeAreaView style={{flex: 1, margin: 20}}>
                <View style={{marginTop: 20, marginBottom: 20}}>
                    <Text style={[colorStyle.textColorPrimary, styles.title]}>Login for Tickme</Text>
                    <Text style={[colorStyle.textColorSecondary,styles.subtitle]}>Welcome back you've been missed!</Text>
                </View>

                <View>
                    <View style={[styles.textInput]}>
                        <Icon name="envelope" size={20} style={styles.inputIconSize} />
                        <TextInput style={{flex: 1}} />
                    </View>

                    <View style={[styles.textInput]}>
                        <Icon name="lock" size={20} style={styles.inputIconSize} />
                        <TextInput style={{flex: 1}} />
                    </View>
                </View>
                
                <TouchableOpacity>
                    <Text style={[colorStyle.textColorSecondary, {textAlign: "right", margin: 5}]}>Recovery Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[colorStyle.btnLogin, {margin: 15, marginTop: 25, padding: 15, alignItems: "center", borderRadius: 25}]}
                >
                    <Text style={[colorStyle.btnLoginText]}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{margin: 5, flexDirection: "row", alignSelf: "center"}}
                >
                    <Text style={colorStyle.textColorSecondary}>Join with us. </Text>
                    <Text style={[colorStyle.textColorPrimary, styles.boldText]}>Create Account</Text>
                </TouchableOpacity>

                <View style={styles.loginBreak}>
                    <View style={[styles.horizontalBreak]} />
                    <Text style={[colorStyle.textColorPrimary]}>Or continue with</Text>
                    <View style={[styles.horizontalBreak]} />
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity
                        style={[colorStyle.btnColorGoogle, {justifyContent: 'center', alignItems:'center', padding: 10, paddingLeft: 12, paddingRight: 12, borderRadius: 40}]}
                        disabled={!request}
                        onPress={() => {
                            promptAsync();
                        }}>
                        <Icon name="google" size={25} style={colorStyle.btnGoogleTextColor}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={colorStyle.textColorSecondary}>By continuing, you agree to Tickme's </Text>
                    <Text style={[styles.boldText]}>Term of Use</Text>
                    <Text style={colorStyle.textColorSecondary}> and confirm that you have read Tickme's </Text>
                    <Text style={[styles.boldText]}>Privacy Policy</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: "bold"
    },
    title: {
        fontSize: 26,
        alignSelf: "center",
        margin: 5,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 18,
        alignSelf: "center",
        margin: 5
    },
    textInput: {
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        margin: 10
    },
    inputIconSize: {
        margin: 10,
        marginLeft: 15
    },
    loginBreak: {
        flexDirection: "row",
        marginTop: "8%",
        marginBottom: "8%"
    },
    horizontalBreak: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf: "center",
        marginLeft: 15,
        marginRight: 15
    },
    footer: {
        padding: 10,
        marginTop: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
});

export default LoginScreen;