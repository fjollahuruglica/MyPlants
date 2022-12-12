import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomText from '../../components/common/CustomText';
import {useAppDispatch} from '../../hooks';
import {RootStackParamList} from '../../navigators/RootContainer';
import {deletePost} from '../../store/Posts';
import {Colors, Fonts, Helpers, Images} from '../../theme';
import {SPACINGS} from '../../theme/Spacings';

type PostDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PostDetailScreen'
>;

type PostDetailRouteProp = RouteProp<RootStackParamList, 'PostDetailScreen'>;

export type PostDetailScreenProps = {
  route: PostDetailRouteProp;
  navigation: PostDetailNavigationProp;
};

const PostDetailScreen: React.FC<PostDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const {item} = route.params;
  return (
    <View>
      <View style={[Helpers.rowBetween, styles.headerStyle]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconStyle}
            resizeMode="cover"
            source={Images.backIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(deletePost(item.id));
            navigation.goBack();
          }}>
          <Image
            style={[styles.iconStyle, {tintColor: Colors.border}]}
            resizeMode="cover"
            source={Images.delete}
          />
        </TouchableOpacity>
      </View>
      <View style={{margin: SPACINGS.L}}>
        <Image
          style={styles.postImage}
          resizeMode="cover"
          source={{
            uri: `https://source.unsplash.com/random/?plant`,
          }}
        />
        <CustomText bold style={[Fonts.xxlarge, {paddingTop: SPACINGS.L}]}>
          {item.title}
        </CustomText>

        <CustomText style={[Fonts.medium, {paddingTop: SPACINGS.L}]}>
          {item.body}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginHorizontal: SPACINGS.L,
    marginTop: SPACINGS.L,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  postImage: {
    maxWidth: '100%',
    height: 400,
    borderRadius: 30,
  },
});

export default PostDetailScreen;
