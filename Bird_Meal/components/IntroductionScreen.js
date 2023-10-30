import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

function IntroductionScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Chào mừng bạn đến với ứng dụng Bird Meal</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.titleButton}>Continue</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        width: 200,
        backgroundColor: "red"
    },
    titleButton: {
        textAlign:'center',
        color: 'white',
        fontSize: 27
    }
  });

export default IntroductionScreen
