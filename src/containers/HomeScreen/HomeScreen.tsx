import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from '../../components/Header';
import {Post} from '../../components/Post';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  RootBottomTabParamList,
  RootStackParamList,
} from '../../navigators/RootContainer';
import {getAllPosts} from '../../store/Posts';
import {SPACINGS} from '../../theme/Spacings';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParamList, 'HomeScreen'>,
  StackNavigationProp<RootStackParamList>
>;

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.posts);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <View>
      <Header />
      {posts.loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={styles.postsContainer}
          data={posts.data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PostDetailScreen', {item});
              }}>
              <Post item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    margin: SPACINGS.L,
    borderRadius: SPACINGS.L,
  },
});

export default HomeScreen;
