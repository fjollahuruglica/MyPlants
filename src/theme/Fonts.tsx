import {StyleSheet} from 'react-native';

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  xxxlarge: 28,
  xxlarge: 24,
  xlarge: 20,
  large: 18,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 9.6,
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
  tiny: {
    fontSize: size.tiny,
  },
  small: {
    fontSize: size.small,
  },
  medium: {
    fontSize: size.medium,
  },
  large: {
    fontSize: size.large,
  },
  xlarge: {
    fontSize: size.xlarge,
  },
  xxlarge: {
    fontSize: size.xxlarge,
  },
  xxxlarge: {
    fontSize: size.xxxlarge,
  },
  url: {
    color: 'blue',
  },
  justifyCenter: {
    textAlign: 'center',
  },
  fontFamilyBold: {
    fontFamily: 'Noah-Bold',
  },
  fontFamilyRegular: {
    fontFamily: 'Noah-Regular',
  },
  bold: {
    fontWeight: 'bold',
  },
  normalWeight: {
    fontWeight: 'normal',
  },
  light: {
    fontWeight: '300',
  },
  italic: {
    fontStyle: 'italic',
  },
});
