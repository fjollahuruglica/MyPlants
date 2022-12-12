import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import CustomInput from '../../components/common/CustomInput';
import CustomText from '../../components/common/CustomText';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {checkAuth, login} from '../../store/Auth';
import {Fonts, Images} from '../../theme';
import {SPACINGS} from '../../theme/Spacings';

type FormData = {
  username: string;
  password: string;
};

const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

const LoginScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const email = useAppSelector(state => state.auth.email);

  useEffect(() => {
    dispatch(checkAuth());
    if (email) {
      navigation.navigate('Tabs');
    }
  }, [email]);

  const handleEmailValidation = (email: string) => {
    console.log('ValidateEmail was called with', email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.username && isValid) || (!errors.username && !isValid);
    if (validityChanged) {
      console.log(isValid ? 'Valid' : 'Invalid');
    }

    return isValid;
  };

  const onSubmit = handleSubmit(data => {
    dispatch(
      login({
        username: data.username,
        password: data.password,
      }),
    );
    dispatch(checkAuth());
  });

  return (
    <View style={{marginTop: SPACINGS.XXXXXL}}>
      <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomText
          bold
          style={[
            Fonts.h3,
            {paddingBottom: SPACINGS.XS, paddingLeft: SPACINGS.L},
          ]}>
          Hello Again!
        </CustomText>
        <CustomText style={styles.welcomeText}>
          Welcome back you've been missed!
        </CustomText>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            validate: handleEmailValidation,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              isPassword
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
      </View>
      {errors.username && (
        <Text style={styles.errorText}>Something went wrong!</Text>
      )}

      <CustomButton onSubmit={onSubmit} label="Sign in" />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    maxWidth: '100%',
    height: 150,
  },
  welcomeText: {
    paddingBottom: 40,
    paddingLeft: 20,
    fontSize: 25,
    width: 280,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default LoginScreen;
