import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {HomeScreen} from '../containers/HomeScreen';
import {ProfileScreen} from '../containers/ProfileScreen';
import {Images} from '../theme';
import {RootBottomTabParamList} from './RootContainer';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {elevation: 0},
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: 'rgb(0,106,254)',
          marginHorizontal: 80,
          marginBottom: 20,
          height: 60,
          borderRadius: 30,
          paddingBottom: 0,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <View
              style={
                focused
                  ? {
                      paddingHorizontal: 20,
                      borderRadius: 15,
                    }
                  : null
              }>
              <Image
                source={Images.home}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? 'white' : '#4190FF',
                }}
              />
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <View
              style={
                focused
                  ? {
                      paddingHorizontal: 25,
                      paddingVertical: 5,
                      borderRadius: 15,
                    }
                  : null
              }>
              <Image
                source={Images.profile}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'white' : '#4190FF',
                }}
              />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
