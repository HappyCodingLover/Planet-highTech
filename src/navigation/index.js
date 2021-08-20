import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Nav from './BottomTabNavigation';
import LoadScreen from '../screens/LoadScreen';
import WalkthroughScreen from '../screens/WalkthroughScreen/WalkthroughScreen';
import AppStyles from '../AppStyles';
import SocialNetworkConfig from '../SocialNetworkConfig';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadScreen">
          <Stack.Screen
            name="LoadScreen"
            component={LoadScreen}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Walkthrough"
            component={WalkthroughScreen}
            initialParams={{
              appStyles: AppStyles,
              appConfig: SocialNetworkConfig,
            }}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            initialParams={{
              appStyles: AppStyles,
              appConfig: SocialNetworkConfig,
            }}
            options={{headerShown: false, gestureEnabled: false}}
          />

          <Stack.Screen
            name="NavStack"
            component={Nav}
            options={{headerShown: false, gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigation;
