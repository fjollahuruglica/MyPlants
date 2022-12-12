import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import CustomText from '../../components/common/CustomText';
import {Images} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {addPost} from '../../store/Posts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import {SPACINGS} from '../../theme/Spacings';

type FormData = {
  title: string;
  body: string;
};

const AddPostScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const postId = useAppSelector(state => state.posts.postId);

  const onSubmit = handleSubmit(data => {
    dispatch(
      addPost({
        title: data.title,
        body: data.body,
        id: postId,
        userId: 1,
      }),
    );
    navigation.goBack();
  });

  return (
    <View>
      <View
        style={{
          padding: SPACINGS.L,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 20, height: 20}}
            resizeMode="cover"
            source={Images.backIcon}
          />
        </TouchableOpacity>
        <CustomText style={{fontSize: 25, paddingTop: 30}}>
          Add a Post
        </CustomText>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
          min: 4,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            label="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            label="Body"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            isTextArea
          />
        )}
        name="body"
      />
      {errors.body && <Text>This is required.</Text>}
      <CustomButton onSubmit={onSubmit} label="Add" />
    </View>
  );
};

export default AddPostScreen;
