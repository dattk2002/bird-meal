import React from 'react'
import { Text, View, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import { useState } from 'react';
import axios from 'axios';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try {
      const response = await axios.get('http://10.0.121.227:3000/users', {
        params: {
          username,
          password,
        },
      });

      const user = response.data[0];
      if (user) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Lỗi', 'Tên người dùng hoặc mật khẩu không đúng.');
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
    }
  };

   
    return (
        <View style={styles.container}>
            <Text>Đăng nhập</Text>
            <TextInput
                placeholder="Tên người dùng"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                placeholder="Mật khẩu"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={()=> handleLogin()}><Text>Login</Text></Pressable>
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

export default Login
