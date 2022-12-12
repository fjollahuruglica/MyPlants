/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomText from '../../components/common/CustomText';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logout} from '../../store/Auth';
import {Fonts, Images} from '../../theme';
import {SPACINGS} from '../../theme/Spacings';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          resizeMode="cover"
          source={{
            uri: `https://api.multiavatar.com/no.png`,
          }}
        />
        <CustomText bold style={[Fonts.xxlarge, {paddingTop: SPACINGS.XS}]}>
          John Doe
        </CustomText>
        <CustomText style={[Fonts.normal, {paddingTop: SPACINGS.XXS}]}>
          Developer
        </CustomText>
        <CustomText style={[Fonts.normal, {paddingTop: SPACINGS.XS}]}>
          Email: admin@admin.com
        </CustomText>
        <View style={styles.buttonStyle}>
          <Image
            style={styles.logoutIcon}
            resizeMode="cover"
            source={Images.logout}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(logout());
              navigation.replace('LoginScreen');
            }}>
            <CustomText bold style={Fonts.xlarge}>
              Log out
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: SPACINGS.XXXXL,
    flexDirection: 'row',
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: SPACINGS.XS,
  },
});

export default ProfileScreen;
