import { View, Text, TextInput, StyleSheet } from 'react-native';

import { GlobalColors } from '../constants/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'black',
    fontWeight:'bold',
    marginBottom: 4,
  },
  labelInvalid: {
    color: GlobalColors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: GlobalColors.primary100,
    borderRadius: 4,
    fontSize: 16,
    elevation:4
  },
  inputInvalid: {
    backgroundColor: GlobalColors.error100,
  },
});