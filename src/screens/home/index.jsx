import React from 'react';
import {
  View, Text, StyleSheet, Image, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { i18n, setLocale } from '../../utils';
import { updateLocale } from '../../redux/user/action';
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
  const [value, onChangeText] = React.useState('Useless Placeholder');
  // const [userLocale, setUserLocale] = React.useState('en');
  const { showActionSheetWithOptions } = useActionSheet();
  const openActionSheet = () => {
    console.log('pressed');

    const title = i18n.t('homeScreen.pleaseSelectLanguage');
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
        dispatch(updateLocale(buttonIndex === 0 ? 'zh' : 'en'));
      },
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: i18n.t('homeScreen.welcome'),
      headerRight: () => <Button title="change" onPress={() => navigation.setOptions({ title: 'x!' })} />
      ,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text onPress={() => openActionSheet()}>
          Testing1
        </Text>
        {/* <Input
          onChangeText={(text) => dispatch(function1(text))}
          onSubmitEditing={(text) => console.log(text)}
        /> */}
      </View>

      <View style={styles.login}>
        <Button
          title={i18n.t('homeScreen.logIn')}
          onPress={() => navigation.setOptions({ title: 'Updated!' })}
        />
        <Button
          title={i18n.t('homeScreen.signUp')}
          onPress={() => navigation.navigate(i18n.t('screenName.createAccount'))}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
