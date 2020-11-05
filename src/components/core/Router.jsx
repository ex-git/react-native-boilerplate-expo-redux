import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import { useSelector } from 'react-redux';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native-appearance';
import { LocalizationContext } from '../../utils';
import HomeScreen from '../../screens/home';
// import Login from '../../screens/login';
import Signup from '../../screens/signup';

const Stack = createStackNavigator();
const Router = () => {
  const isLoggedIn = true;
  const { t, locale, setLocale } = useContext(LocalizationContext);

  const colorScheme = useColorScheme();
  const routeNameRef = useRef();
  const navigationRef = useRef();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  // const MyTheme = {
  //   dark: false,
  //   colors: {
  //     primary: 'rgb(255, 45, 85)',
  //     background: 'rgb(242, 242, 242)',
  //     card: 'rgb(255, 255, 255)',
  //     text: 'rgb(28, 28, 30)',
  //     border: 'rgb(199, 199, 204)',
  //     notification: 'rgb(255, 69, 58)',
  //   },
  // };
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
      theme={theme}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: theme.text,
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
