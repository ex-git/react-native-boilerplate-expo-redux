import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Button,
} from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { LocalizationContext } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  changeLanguageButton: {
    padding: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,

  },
});

const Setting = ({ test }) => {
  const { t, locale, setLocale } = React.useContext(LocalizationContext);

  const { colors } = useTheme();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: props => <LogoTitle {...props} />,
      headerTitle: t('homeScreen.welcome', { locale }),
      headerRight: () => <Button title="change" onPress={() => navigation.setOptions({ title: 'x!' })} />
      ,
    });
  }, [navigation, locale]);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: 'white' }}>
        {t('homeScreen.welcome')}
      </Text>
      <TouchableOpacity
        style={styles.changeLanguageButton}
      >
        <Text>
          {t('homeScreen.welcome')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
