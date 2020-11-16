import React, { useRef } from 'react';
import {
  View, Text, StyleSheet, Image, Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useTheme } from '@react-navigation/native';
import { LocalizationContext } from '../../utils';
// import { StyleSheet, Text, View } from 'react-native';
// import { Input, Button } from '../../components/atoms';
import { loginRequest } from '../../redux/user/action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { t, locale, setLocale } = React.useContext(LocalizationContext);
  const [value, onChangeText] = React.useState('Useless Placeholder');

  const animation = useRef();
  const { showActionSheetWithOptions } = useActionSheet();
  const openActionSheet = () => {
    const title = t('homeScreen.pleaseSelectLanguage');
    const languages = [
      { en: t('languages.english') },
      { zh: t('languages.chinese') },
    ];
    const options = [...languages.map((lang) => Object.values(lang)[0]), t('menu.cancel')];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = options.length - 1;
    showActionSheetWithOptions(
      {
        title,
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex !== cancelButtonIndex) {
          setLocale(Object.keys(languages[buttonIndex])[0]);
        }
      },
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: props => <LogoTitle {...props} />,
      headerTitle: t('homeScreen.welcome'),
      headerRight: () => <Button title={t('homeScreen.language')} onPress={() => openActionSheet()} />,
    });
  }, [navigation, locale]);

  const handleLogin = () => {
    animation.current.play();
    // dispatch(loginRequest({ user: 'test', password: 'test' }));
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.intro}>
        <Text onPress={() => openActionSheet()} style={{ color: colors.text }}>
          Text
        </Text>
        {/* <Input
          onChangeText={(text) => dispatch(function1(text))}
          onSubmitEditing={(text) => console.log(text)}
        /> */}
      </View>

      <View style={styles.login}>
        <Button
          title={t('homeScreen.logIn')}
          onPress={() => navigation.setOptions({ title: 'Updated!' })}
        />
        <Button
          title={t('homeScreen.signUp')}
          onPress={() => navigation.navigate('createAccount')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
