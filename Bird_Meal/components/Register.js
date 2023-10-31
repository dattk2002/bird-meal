import React from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, Alert, ImageBackground } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleRegister = async () => {
        if (!username || !password || !confirmPassword) {
            Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Kiểm tra xem username đã tồn tại trong danh sách users
        const userExists = await checkUsernameExists(username);

        if (userExists) {
            Alert.alert('Lỗi', 'Tên người dùng đã tồn tại. Vui lòng chọn tên khác.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Lỗi', 'Mật khẩu và xác nhận mật khẩu không khớp.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.125.99:3000/users', {
                username,
                password,
            });

            // Thành công, bạn có thể xử lý điều gì đó ở đây nếu cần.

            Alert.alert('Đăng ký thành công', 'Tài khoản của bạn đã được tạo.');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Lỗi khi đăng ký:', error);
            Alert.alert('Lỗi', 'Có lỗi xảy ra khi đăng ký.');
        }
    };

    // Hàm kiểm tra username tồn tại
    const checkUsernameExists = async (username) => {
        try {
            const response = await axios.get('http://10.0.125.99:3000/users', {
                params: {
                    username,
                },
            });

            return response.data.length > 0;
        } catch (error) {
            console.error('Lỗi khi kiểm tra username:', error);
            return false;
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../image/login.jpg')}
                resizeMode="cover"
                style={styles.image}
            >
                <Pressable style={styles.positionBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.textBack}>
                        Back</Text>
                </Pressable>
                <View style={styles.viewlogin}>
                    <Text style={styles.title}>Đăng Ký</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên người dùng"
                        placeholderTextColor="white" // Đặt màu của placeholder
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        color="white" // Đặt màu của văn bản người dùng nhập
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        secureTextEntry
                        placeholderTextColor="white" // Đặt màu của placeholder
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        color="white" // Đặt màu của văn bản người dùng nhập
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Xác Nhận Mật khẩu"
                        secureTextEntry
                        placeholderTextColor="white" // Đặt màu của placeholder
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        color="white" // Đặt màu của văn bản người dùng nhập
                    />
                    <Pressable style={styles.button} onPress={() => handleRegister()}>
                        <Text style={styles.buttonText}>Đăng Ký</Text>
                    </Pressable>
                    <View style={styles.registerText}>
                        <Text style={styles.registerPrompt}>Bạn đã có tài khoản? </Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.registerLink}>Đăng Nhập</Text>
                        </Pressable>
                    </View>
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
    viewlogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        width: '80%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    goBackButton: {
        backgroundColor: 'gray',
        width: '80%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        flexDirection: 'row',
        marginTop: 10,
    },
    registerPrompt: {
        color: 'black',
    },
    registerLink: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    textBack: {
        fontSize: 20,
        color: 'white'
    },
    positionBack: {
        marginTop: 60,
        marginLeft: 30,
    }
});

export default Register;
