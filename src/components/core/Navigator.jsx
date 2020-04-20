import React, { Component } from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home';
// import Login from '../../screens/login';
import Signup from '../../screens/signup';

const Stack = createStackNavigator();
const Navigator = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Log in" component={Login} /> */}
            <Stack.Screen name="Create Account" component={Signup} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
