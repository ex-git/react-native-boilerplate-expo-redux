import React from 'react';
import {
  View, Text, StyleSheet, Image, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useTheme } from '@react-navigation/native';
import { LocalizationContext } from '../../utils';
// import { StyleSheet, Text, View } from 'react-native';
// import { Input, Button } from '../../components/atoms';

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
  // const [userLocale, setUserLocale] = React.useState('en');
  const { showActionSheetWithOptions } = useActionSheet();
  const openActionSheet = () => {
    const title = t('homeScreen.pleaseSelectLanguage');
    const options = ['Chinese', 'English', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;
    showActionSheetWithOptions(
      {
        title,
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        setLocale(buttonIndex === 0 ? 'zh' : 'en');
      },
    );
  };
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
      <View style={styles.intro}>
        <Text onPress={() => openActionSheet()} style={{ color: colors.text }}>
          Testing1
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
