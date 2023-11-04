import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, Alert } from 'react-native';

function AboutUsScreen({ navigation }) {

    const clearAllFavorites = () => {
        Alert.alert(
            'Logou',
            'Do you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: () => {
                        navigation.navigate("Login");
                    },
                },
            ]
        );
    };

    const handleLogout = () => {
        clearAllFavorites()
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../image/us.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>About Us</Text>
                <Text style={styles.description}>
                    Welcome to our revolutionary bird food managing app! With a passion for avian companionship and a deep understanding of the importance of nutritious diets for our feathered friends, we have created a comprehensive solution to simplify and enhance the way you care for your birds.
                </Text>
                <Text style={styles.description}>
                    Thank you for downloading our app!
                </Text>
                <Pressable style={styles.button} onPress={() => handleLogout()}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Pressable>
            </ImageBackground>


        </View>
    );
}

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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'white',
        marginHorizontal: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        backgroundColor: "red",
        marginLeft: 300,
        marginRight: 6,
        padding: 10,
        top: 348,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default AboutUsScreen;
