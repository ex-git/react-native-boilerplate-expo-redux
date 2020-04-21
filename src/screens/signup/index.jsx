import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Picker,
} from 'react-native';
import { useDispatch } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
import {
  Button, Input, Tooltip, Text,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { stringFormatter } from '../../components/utils';
import { LanguagesPicker } from '../../components/molecules';
// import { function1 } from '../../redux/actions';


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
  },
  infoName: {
    // flex: 1,
    width: 300,
    flexDirection: 'row',
  },
  inputName: {
    flex: 1,
  },
  name: {
    marginBottom: 20,
    width: 100,
    flex: 1,
  },

  flName: {
    // width: 100,
  },
  inputOther: {
    // flex: 3,
    marginBottom: 20,
  },
  other: {
    minWidth: 300,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 0,
    marginRight: 5,
  },
  submit: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 200,
  },
});
const Signup = () => {
  const dispatch = useDispatch();
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [submitting, setSubmitting] = useState(false);
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [showStrongPasswordHint, setShowStrongPasswordHint] = useState(false);
  const [passwordErrorMsg1, setPasswordErrorMsg1] = useState();
  const [passwordErrorMsg2, setPasswordErrorMsg2] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorStyle1, setPasswordErrorStyle1] = useState('green');
  const [passwordErrorStyle2, setPasswordErrorStyle2] = useState('green');
  const handleSubmit = () => {
    setSubmitting(true);
  };
  const strongPasswordHint = [
    'A strong password should have:',
    '  - at least 8 digits',
    '  - at least 1 number (0-9)',
    '  - at least 1 upper case letter (A-Z)',
    '  - at least 1 lower case letter (a-z)',
    '  - at least 1 symbol (eg. #?!@$%^&*-)',
  ];
  const handleInput = (name, text) => {
    let error = false;
    if (name === 'password1') {
      let msg;
      let strongPassword = false;
      if (text === '') {
        msg = "Password can't be empty";
      } else if (!stringFormatter(text) || text.includes(' ')) {
        msg = "Password can't include space";
      } else if (!stringFormatter(text) || stringFormatter(text).length < 6) {
        msg = 'Minimum 6 digits';
      }
      if ((stringFormatter(text) && (stringFormatter(text).length < 8))
        || (stringFormatter(text) && !/\d+/.test(stringFormatter(text)))
        || (stringFormatter(text) && !/[A-Z]+/.test(stringFormatter(text)))
        || (stringFormatter(text) && !/[a-z]+/.test(stringFormatter(text)))
        || (stringFormatter(text) && !/[#?!@$%^&*-]+/.test(stringFormatter(text)))) {
        setShowStrongPasswordHint(true);
      } else {
        strongPassword = true;
        setShowStrongPasswordHint(false);
      }
      if (msg) {
        error = true;
        setPasswordErrorMsg1(msg);
        setPasswordErrorStyle1('red');
      } else if (strongPassword) {
        setPasswordErrorMsg1('This is a strong password!');
        setPasswordErrorStyle1('green');
      } else {
        setPasswordErrorMsg1(null);
      }
      setPassword1(text);
      if (password2 && password2 !== text) {
        setPasswordErrorMsg2('Password does not match');
      } else {
        setPasswordErrorMsg2(null);
      }
    }
    if (name === 'password2') {
      if (password1 && password1 !== text) {
        error = true;
        setPasswordErrorMsg2('Password does not match');
      } else {
        setPasswordErrorMsg2(null);
      }
      setPassword2(text);
    }
  };

  return (
    <View style={styles.container}>
      <LanguagesPicker />
      <View style={styles.info}>
        <View style={styles.infoName}>
          <View style={styles.name}>
            <Input
              label="Name"
              placeholder="First Name"
              onChangeText={(text) => handleInput('firstName', text)}
            />
          </View>

          <View style={styles.name}>
            <Input
              label=" "
              placeholder="Last Name"
              onChangeText={(text) => handleInput('lastName', text)}
            />
          </View>
        </View>
        <View style={styles.infoOther}>
          <View style={styles.other}>
            <Input
              label="E-mail"
              placeholder="xxx@xxx.xxx"
              onChangeText={(text) => handleInput('email', text)}
              leftIconContainerStyle={styles.icon}
              keyboardType="email-address"
              leftIcon={(
                <Icon
                  name="envelope-open-o"
                  size={18}
                  color="black"
                />
              )}
            />
          </View>
          <View style={styles.other}>

            <Input
              label="Create your password"
              placeholder=""
              onChangeText={(text) => handleInput('password1', text)}
              errorStyle={{ color: passwordErrorStyle1 }}
              errorMessage={(passwordErrorMsg1 && passwordErrorMsg1) || null}
              inputContainerStyle={styles.input}
              leftIconContainerStyle={styles.icon}
              boardType="visible-password"
              // textContentType="newPassword"
              // secureTextEntry
              leftIcon={(
                <Icon2
                  name="unlock"
                  size={20}
                  color="black"
                />
              )}
              rightIcon={showStrongPasswordHint
                ? (
                  <Tooltip width={270} height={125} popover={<Text>{strongPasswordHint.join('\n')}</Text>}>
                    <Icon2
                      name="info"
                      size={20}
                      color="green"
                    />
                  </Tooltip>
                )
                : null}
            />

          </View>

          <View style={styles.other}>
            <Input
              label="Confirm your password"
              placeholder=""
              onChangeText={(text) => handleInput('password2', text)}
              errorStyle={{ color: 'red' }}
              errorMessage={passwordErrorMsg2 || ''}
              inputContainerStyle={styles.input}
              leftIconContainerStyle={styles.icon}
              keyboardType="visible-password"
              // textContentType="newPassword"
              // secureTextEntry
              leftIcon={(
                <Icon2
                  name="unlock"
                  size={20}
                  color="black"
                />
              )}
            />
          </View>
        </View>

      </View>

      <View style={styles.submit}>
        <Button
          title="Submit"
          buttonStyle={styles.button}
          loading={submitting}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};


export default Signup;
