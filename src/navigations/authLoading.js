import React from 'react';
import { ActivityIndicator, StatusBar, View, Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

import { Colors } from '../styles';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');

    return;
  };

  // Render any loading content that you like here
  render() {
    const colorScheme = Appearance.getColorScheme();

    let BACKGROUND_COLOR_DEFAULT = Colors.WHITE;
    if (colorScheme === 'dark') {
      BACKGROUND_COLOR_DEFAULT = Colors.NEUTRAL_DARK_900;
    }

    return (
      <View style={{flex: 1, backgroundColor: BACKGROUND_COLOR_DEFAULT}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;