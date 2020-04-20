import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
import { changeScreen } from '../../redux/actions';
import { Input, Button } from '../../components/atoms';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  intro: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  login: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text onPress={() => dispatch(function1('x'))}>
          Testing1
        </Text>
        {/* <Input
          onChangeText={(text) => dispatch(function1(text))}
          onSubmitEditing={(text) => console.log(text)}
        /> */}
      </View>

      <View style={styles.login}>
        <Button
          label="Log In"
          onPress={() => alert('Login')}
        />
        <Button
          label="Sign Up"
          onPress={() => navigation.navigate('Create Account')}
        />
      </View>
    </View>
  );
};


export default HomeScreen;
