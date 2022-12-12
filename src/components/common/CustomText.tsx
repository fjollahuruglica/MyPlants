import React from 'react';
import {Text, View} from 'react-native';
import {Fonts} from '../../theme';
interface CustomTextProps {
  bold?: boolean;
  style?: any;
  children: string;
}
const CustomText: React.FC<CustomTextProps> = ({children, bold, style}) => {
  const fontFamily = bold ? Fonts.fontFamilyBold : Fonts.fontFamilyRegular;
  return (
    <View>
      <Text numberOfLines={2} style={[fontFamily, style]}>
        {children}
      </Text>
    </View>
  );
};

export default CustomText;
