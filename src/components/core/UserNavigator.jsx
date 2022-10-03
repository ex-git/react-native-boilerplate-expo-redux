import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useTheme,
} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../../screens/setting';
import { TabBarIcon } from '../molecules';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabsStack = ({ getImg }) => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: colors.text.primary,
      }}
    >
      <Tab.Screen
        name="new"
        options={{
          tabBarLabel: 'New',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              name="setting"
              color={color}
              focused={focused}
              size={size}
            />
          ),
        }}
      >
        {() => <Setting />}
      </Tab.Screen>
      <Tab.Screen
        name="setting"
        options={{
          tabBarLabel: 'Mall',
          activeTintColor: '#e91e63',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              name="setting"
              color={color}
              focused={focused}
              size={size}
            />
          ),
        }}
      >
        {() => <Setting />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const UserNavigator = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          //   backgroundColor: colors.background,
          //   shadowColor: 'transparent',
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Tabs"
      >
        {() => <TabsStack />}
      </Stack.Screen>
      <Stack.Screen
        name="message"
        component={Setting}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
