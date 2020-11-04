import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationContext } from '../../utils';
import HomeScreen from '../../screens/home';
// import Login from '../../screens/login';
import Signup from '../../screens/signup';

const Stack = createStackNavigator();
const Router = () => {
  const isLoggedIn = true;
  const { t, locale, setLocale } = useContext(LocalizationContext);
  const routeNameRef = useRef();
  const navigationRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
        // The line below uses the expo-firebase-analytics tracker
        // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
        // Change this line to use another Mobile analytics SDK
          console.info(currentRouteName);
          // Analytics.setCurrentScreen(currentRouteName);
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="home"
              options={({ route }) => ({ title: t('homeScreen.welcome') })}
              component={HomeScreen}
            />
            {/* <Stack.Screen name="Log in" component={Login} /> */}
            <Stack.Screen
              name="createAccount"
              options={({ route }) => ({ title: t('homeScreen.createAccount') })}
              component={Signup}
            />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
