import React from 'react';
import { Login,Register,Landing } from '../../containers/pages/';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         initialRouteName="Home"
         headerMode = 'none'
         screenOptions={{ gestureEnabled: false }}
        >
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="Register"
            component={Register}
        />
        <Stack.Screen
            name="Landing"
            component={Landing}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;