import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTintColor: '#2CDED4' }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '首页',
          }}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '登录'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
