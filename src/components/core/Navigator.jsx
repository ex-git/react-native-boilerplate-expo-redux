import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { i18n, setLocale } from '../../utils';
import HomeScreen from '../../screens/home';
// import Login from '../../screens/login';
import Signup from '../../screens/signup';

const Stack = createStackNavigator();
const Navigator = () => {
  const isLoggedIn = true;
  const currentLocal = useSelector((state) => state.user.locale);
  const [userLocale, setUserLocale] = useState('en');
  useEffect(() => {
    console.info('ok, changed');
    setUserLocale(currentLocal);
  }, [currentLocal]);
  return (
    <NavigationContainer>
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
              name={i18n.t('screenName.home')}
              options={{ title: i18n.t('homeScreen.welcome') }}
              component={HomeScreen}
            />
            {/* <Stack.Screen name="Log in" component={Login} /> */}
            <Stack.Screen
              name={i18n.t('screenName.createAccount')}
              options={{ title: i18n.t('homeScreen.createAccount') }}
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

export default Navigator;
