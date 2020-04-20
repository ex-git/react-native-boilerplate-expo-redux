import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
import { function1 } from '../../redux/actions';
import { Input, Button } from '../../components/atoms';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  info: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  submit: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
const Signup = () => {
  const dispatch = useDispatch();
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Input
          label="test"
          onChangeText={(text) => dispatch(function1(text))}
          onSubmitEditing={(text) => console.log(text)}
        />
        <Input
          onChangeText={(text) => dispatch(function1(text))}
          onSubmitEditing={(text) => console.log(text)}
        />
      </View>

      <View style={styles.submit}>
        <Button
          label="Submit"
          onPress={() => alert('Login')}
        />
      </View>
    </View>
  );
};


export default Signup;
