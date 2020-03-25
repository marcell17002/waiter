import React from 'react';
import { Login,Register,Landing,MerchantPicker,MenuPicker,Orders,Profile} from '../../containers/pages/';

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
         <Stack.Screen
            name="MerchantPicker"
            component={MerchantPicker}
        />
          <Stack.Screen
            name="MenuPicker"
            component={MenuPicker}
        />
        <Stack.Screen
            name="Orders"
            component={Orders}
        />
        <Stack.Screen
            name="Profile"
            component={Profile}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;