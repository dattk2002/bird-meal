import { StyleSheet, Text, View } from 'react-native';
import IntroductionScreen from './components/IntroductionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Introduction' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Introduction' component={IntroductionScreen}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


