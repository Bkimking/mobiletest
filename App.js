import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import AboutScreen from './about';
import ContactsScreen from './contact';
import Login from './auth/login';
import Register from './auth/register';
import Forgotpass from './auth/forgetpassword';
import Resetpass from './auth/resetpassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contacts" component={ContactsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}