import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 75,
    backgroundColor: 'ivory',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});

const Button = ({
  onPress,
  label = 'Button',
  buttonStyle = styles.button,
  textColor = styles.text,
}) => (
  <TouchableOpacity
    style={buttonStyle}
    onPress={onPress}
  >
    <Text style={textColor}>
      {label.toUpperCase()}
    </Text>
  </TouchableOpacity>
);


Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textColor: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Button;
