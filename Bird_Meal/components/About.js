import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../image/us.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>About Us</Text>
                <Text style={styles.description}>
                    Welcome to our app! This is a brief description of our app or organization.
                    You can add more details about your team, mission, or any other relevant information here.
                </Text>
            </ImageBackground>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    image: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'white'
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: 'red'
    },
});

export default AboutUsScreen;
