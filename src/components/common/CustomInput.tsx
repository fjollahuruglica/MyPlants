import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SPACINGS} from '../../theme/Spacings';
import CustomText from './CustomText';
interface CustomInputProps {
  label: string;
  isPassword?: boolean;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  value: string;
  isTextArea?: boolean;
}
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  isPassword,
  onBlur,
  onChangeText,
  value,
  isTextArea,
}) => {
  return (
    <View>
      <CustomText style={styles.text}>{label}</CustomText>
      <TextInput
        style={[styles.input, isTextArea ? {height: 150} : null]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        numberOfLines={isTextArea ? 10 : 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingLeft: SPACINGS.L,
    paddingTop: SPACINGS.L,
  },
  input: {
    height: 40,
    marginHorizontal: SPACINGS.L,
    backgroundColor: 'rgba(0,106,254, 0.1)',
    borderRadius: SPACINGS.XS,
    padding: SPACINGS.XS,
  },
});

export default CustomInput;
