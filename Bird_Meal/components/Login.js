import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import axios from "axios";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin đăng nhập.");
      return;
    }
    try {
      const response = await axios.get("http://192.168.1.89:3000/users", {
        params: {
          username,
          password,
          role,
        },
      });

      const user = response.data[0];
      if (user) {
        if (user.role === true) {
          navigation.navigate("AdminPage");
        } else {
          navigation.navigate("HomePage");
        }
      } else {
        Alert.alert("Lỗi", "Tên người dùng hoặc mật khẩu không đúng.");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../image/login.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable
          style={styles.positionBack}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textBack}>Back</Text>
        </Pressable>
        <View style={styles.viewlogin}>
          <Text style={styles.title}>Đăng nhập</Text>
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
          <Pressable style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View style={styles.registerText}>
            <Text style={styles.registerPrompt}>Chưa có tài khoản? </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}>Đăng ký</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    width: "80%",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  goBackButton: {
    backgroundColor: "gray",
    width: "80%",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    flexDirection: "row",
    marginTop: 10,
  },
  registerPrompt: {
    color: "black",
  },
  registerLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  textBack: {
    fontSize: 20,
    color: "white",
  },
  positionBack: {
    marginTop: 60,
    marginLeft: 30,
  },
});

export default Login;
