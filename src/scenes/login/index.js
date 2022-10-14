import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
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
        <TouchableOpacity
            style={{justifyContent: 'center', alignItems:'center', marginLeft: 10, marginTop: 5}}
            disabled={!request}
            onPress={() => {
                promptAsync();
            }}>
            <Icon name="google" size={30} />
        </TouchableOpacity>
    );
}

export default LoginScreen;