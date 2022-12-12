import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, StatusBar, StatusBarStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PostDetailScreen} from '../containers/PostDetailScreen';
import {AddPostScreen} from '../containers/AddPostScreen';
import {LoginScreen} from '../containers/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IPost} from '../store/models';
import MyTabs from './BottomTabContainer';

const Stack = createStackNavigator<RootStackParamList>();

export const MOCK_USERNAME = 'admin@admin.com';
export const MOCK_PASSWORD = '123456';

export type RootBottomTabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type RootStackParamList = {
  LoginScreen: undefined;
  Tabs: RootBottomTabParamList;
  PostDetailScreen: {
    item: IPost;
  };
  AddPostScreen: undefined;
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
};

const MainLoader = () => {
  const [initialised, setInitialised] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoginStatus = async () => {
      // Get the login information from AsyncStorage
      const username = await AsyncStorage.getItem('username');
      const password = await AsyncStorage.getItem('password');

      // Check if the login information exists and is correct
      if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
        setIsLoggedIn(true);
      }

      setInitialised(true);
    };

    getLoginStatus();
  }, []);

  return initialised ? (
    <RootContainer initialRoute={isLoggedIn ? 'Tabs' : 'LoginScreen'} />
  ) : (
    <ActivityIndicator />
  );
};

const CustomStatusBar = ({
  backgroundColor,
  barStyle = 'dark-content',
}: {
  backgroundColor: string;
  barStyle?: StatusBarStyle;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

const RootContainer: React.FC<any> = props => {
  return (
    <NavigationContainer theme={MyTheme}>
      <CustomStatusBar backgroundColor={'white'} />
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerStyle: {elevation: 0},
        }}
        initialRouteName={props.initialRoute}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tabs"
          component={MyTabs}
        />
        <Stack.Screen
          name="PostDetailScreen"
          component={PostDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainLoader;
