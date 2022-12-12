import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IPost} from '../../store/models';
import {Colors, Helpers, Images} from '../../theme';
import {SPACINGS} from '../../theme/Spacings';
import CustomText from '../common/CustomText';
interface Props {
  item: IPost;
}
const NewsCard: React.FC<Props> = ({item}) => {
  return (
    <View style={[Helpers.shadow, Helpers.directionRow, styles.postHolder]}>
      <Image
        style={styles.postImage}
        resizeMode="cover"
        source={{
          uri: `https://source.unsplash.com/random/?plant,${item.id}`,
        }}
      />
      <View style={styles.postInfoHolder}>
        <CustomText bold>{item.title}</CustomText>
        <CustomText style={{paddingTop: SPACINGS.M}}>{item.body}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHolder: {
    marginHorizontal: SPACINGS.XS,
    marginTop: SPACINGS.XS,
    padding: SPACINGS.M,
    borderRadius: SPACINGS.L,
    backgroundColor: Colors.background,
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: SPACINGS.XS,
  },
  postInfoHolder: {
    paddingLeft: SPACINGS.XS,
    justifyContent: 'space-around',
    height: 50,
    width: 150,
    paddingTop: SPACINGS.XXS,
  },
});

export default NewsCard;
