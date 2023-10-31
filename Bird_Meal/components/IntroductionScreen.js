import React from 'react';
import { Pressable } from 'react-native';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';

function IntroductionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../image/background.jpg')}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>
                    Chào mừng đến với ứng dụng thức ăn cho chim!
                </Text>
                <Text style={styles.description}>
                    Ứng dụng của chúng tôi giúp bạn tạo ra môi trường thân thiện cho các loài chim bằng cách cung cấp đa dạng các loại thức ăn. 
                    Bạn có thể xem thức ăn phù hợp với loại chim nào, thêm thức ăn vào danh sách yêu thích
                </Text>
                <View style={styles.viewbutton}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Continue </Text>
                </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    text: {
        marginTop: 80,
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 16,
    },
    description: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 16,
        marginTop: 16,
    },
    viewbutton:{

        marginTop: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default IntroductionScreen;
