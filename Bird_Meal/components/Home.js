import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable onPress={()=> navigation.goBack()}><Text>Back</Text></Pressable>
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
  });

export default Home
