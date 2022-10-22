import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../scenes/login';
import LoginInfoScreen from '../scenes/login/loginInfo';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LoginInfo" screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginInfo" component={LoginInfoScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator;