
import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../containers/splash";
import SignUpScreen from "../containers/signup";
import LoginScreen from "../containers/login";
import ForgotPasswordScreen from "../containers/forgotPassword";
import UnlockScreen from "../containers/unlock";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="Unlock"
          component={UnlockScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
