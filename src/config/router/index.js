import React from 'react';
import { Login,Register,Landing,MerchantPicker,MenuPicker,Orders,Profile, EditProfile,Invoice,Searching} from '../../containers/pages/';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PreStack = createStackNavigator();
const Stack = createStackNavigator();

function PreStackScreen () {
  return(
  <PreStack.Navigator>
    <PreStack.Screen name="Login" component={Login}/>
    <PreStack.Screen name="Register" component={Register}/>
  </PreStack.Navigator>
);
  }
function HomeStackScreen () {
  return(
  <HomeStack.Navigator screenOptions={{gestureEnabled: false }} >
    <HomeStack.Screen name="Landing" component={Landing}  headerMode = 'none' screenOptions={{headerShown: false ,gestureEnabled: false }}/>
    <HomeStack.Screen name="Searching" component={Searching}/>
    <HomeStack.Screen name="MerchantPicker" component={MerchantPicker}/>
    <HomeStack.Screen name="MenuPicker" component={MenuPicker}/>
  </HomeStack.Navigator>
);
  }
function OrdersStackScreen () {
  return(
  <OrdersStack.Navigator>
    <OrdersStack.Screen name="OnGoing Orders" component={Orders}/>
    <OrdersStack.Screen name="Invoice" component={Invoice}/>
  </OrdersStack.Navigator>
);
  }
function ProfileStackScreen () {
  return(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}/>
    <ProfileStack.Screen name="EditProfile" component={EditProfile}/>
  </ProfileStack.Navigator>
);
  }

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStackScreen" component={HomeStackScreen}/>
        <Stack.Screen name="OrdersStackScreen" component={OrdersStackScreen}/>
        <Stack.Screen name="ProfileStackScreen" component={ProfileStackScreen}/>   
      </Stack.Navigator>
        </NavigationContainer>
  );
}
export default App;