import React from 'react';
import {SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ComponentsScreen from '../screens/ComponentsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = ({route, onPress, focus, tabIcons}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={'frown-o'} size={30} color={focus ? 'red' : 'blue'} />
    </TouchableOpacity>
  );
};

const TabBarBuilder = ({tabIcons, route, state, navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'blue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {state.routes.map((route, index) => {
        return (
          <Tab
            key={index + ''}
            route={state.routes[index]}
            tabIcons={tabIcons}
            focus={state.index === index}
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}
    </SafeAreaView>
  );
};
const BottomTab = createBottomTabNavigator();
export default function Nav() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        title: route.name,
      })}
      tabBar={({state, route, navigation}) => (
        <TabBarBuilder
          tabIcons={{
            Components: 'rocket',
          }}
          route={route}
          state={state}
          navigation={navigation}
        />
      )}
      initialRouteName="Components">
      <BottomTab.Screen name="Components" component={ComponentsScreen} />
    </BottomTab.Navigator>
  );
}
