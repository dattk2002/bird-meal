import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import IntroductionScreen from "./components/IntroductionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Register from "./components/Register";
import List from "./components/List";
import Favorite from "./components/Favorite";
import AdminPage from "./components/AdminPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { MaterialIcons } from "@expo/vector-icons";
import FoodDetail from "./components/FoodDetail";
import AboutUsScreen from "./components/About";

function Home() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.color}>Hello</Text>
    // </View>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favorite") {
            iconName = "favorite-border";
          } else {
            iconName = "devices-other";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={List} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="About Us" component={AboutUsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Introduction"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AdminPage" component={AdminPage} options={{title: "Admin Screen"}}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // căn giữa theo chiều dọc
    alignItems: "center", // căn giữa theo chiều ngang
  },
  color: {
    color: "black",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
