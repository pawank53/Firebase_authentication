import React from 'react';
import { ImageBackground, StyleSheet, View } from "react-native"

const Background = ({ source, children }) => {
    return (
        <ImageBackground source={source} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                {children}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        // flex: 1,
        // width: '100%',
        // height: '100%',
        // position: 'absolute',
        // top: 0,
        // left: 0,
    },
    overlay: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    }
})
export default Background;