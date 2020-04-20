import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  inputHeight: {
    height: 50,
  },
  textInput: {
    height: 50,
    width: 200,
    backgroundColor: 'red',
    color: 'grey',
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  errorStyle: {
    height: 35,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 2,
    color: '#000',
    paddingHorizontal: 8,
  },
  requireField: {
    color: 'red',
  },
});

const Input = (
  {
    label,
    value,
    defaultValue = '',
    autoCapitalize = false,
    onChangeText,
    placeholder = '',
    secureTextEntry = false,
    error = false,
    errorStyles = null,
    onSubmitEditing,
    rel = null,
    editable = true,
    returnKeyType = 'done',
    keyboardType = 'default',
    newStyles,
    autoFocus = false,
    multiline = false,
    maxLength = null,
    dataDetectorTypes = 'all',
  },
) => {
  const { textInput, errorStyle } = styles;
  return (
    <View>
      <View>
        {label ? <Text>{label}</Text> : null}
        <TextInput
          ref={rel}
          returnKeyType={returnKeyType} // Determines how the return key should look
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry} // Identifies whether the text object should disable text copying and in some cases hide the text being entered.
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          defaultValue={defaultValue}
          editable={editable}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          blurOnSubmit
          autoCapitalize={autoCapitalize || 'none'}
          style={error ? ((errorStyles) || errorStyle) : (newStyles || textInput)}
          autoFocus={autoFocus}
          multiline={multiline}
          dataDetectorTypes={dataDetectorTypes}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  dataDetectorTypes: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.bool,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  rel: PropTypes.func,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  newStyles: PropTypes.object,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  errorStyles: PropTypes.object,
  autoFocus: PropTypes.bool,
  multiline: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default Input;
