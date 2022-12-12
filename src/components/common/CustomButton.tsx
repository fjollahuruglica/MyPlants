import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SPACINGS} from '../../theme/Spacings';
import CustomText from './CustomText';
interface CustomButtonProps {
  label: string;
  onSubmit: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <CustomText bold style={styles.text}>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0,106,254, 1)',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CustomButton;
