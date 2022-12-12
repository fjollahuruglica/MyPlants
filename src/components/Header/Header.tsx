import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Fonts, Helpers, Images} from '../../theme';
import {useNavigation, useTheme} from '@react-navigation/native';
import CustomText from '../common/CustomText';
import {SPACINGS} from '../../theme/Spacings';
import {HomeScreenNavigationProp} from '../../containers/HomeScreen/HomeScreen';

const Header: React.FC = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View
      style={[
        Helpers.rowBetween,
        ,
        Helpers.alignCenter,
        {marginHorizontal: SPACINGS.XXL},
      ]}>
      <View style={Helpers.alignRCenter}>
        <View>
          <Image
            style={styles.avatar}
            resizeMode="cover"
            source={{
              uri: `https://api.multiavatar.com/no.png`,
            }}
          />
        </View>
        <CustomText bold style={[Fonts.xxlarge, {paddingLeft: SPACINGS.XS}]}>
          Hello, Planter!
        </CustomText>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AddPostScreen')}>
        <Image
          style={styles.plusIcon}
          resizeMode="cover"
          source={Images.plusIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  plusIcon: {
    width: 20,
    height: 20,
  },
});

export default Header;
