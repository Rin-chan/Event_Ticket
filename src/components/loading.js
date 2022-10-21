import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const _width = Dimensions.get('screen').width * 0.45;

const LoadingComponent = ({colorStyle}) => {
    return (
        <View style={[colorStyle.backgroundColorDefault, styles.container]}>
            <Image
                style={{height: _width, width: _width, resizeMode: "contain"}}
                source={require("../assets/images/logo.png")}
            />
            <Text style={[colorStyle.textColorPrimary, {fontSize: 38, fontWeight: "bold"}]}>Tickme</Text>
            <Text style={[colorStyle.textColorSecondary, {marginTop: "3%"}]}>We Manage Your Ticket</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default LoadingComponent;