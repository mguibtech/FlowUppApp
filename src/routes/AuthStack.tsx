import { createStackNavigator } from '@react-navigation/stack';
import {
  FingerprintScreen,
  ForgotPassword,
  LoginScreen,
  NewPasswordScreen,
  SecurityPinScreen,
  SignUpScreen,
} from '@screens';
import React from 'react';

export type AuthStackParamList = {
  Login: undefined;
  SignUpScreen: undefined;
  ForgotPassword: undefined;
  SecurityPinScreen: undefined;
  NewPasswordScreen: undefined;
  FingerprintScreen: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SecurityPinScreen" component={SecurityPinScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="FingerprintScreen" component={FingerprintScreen} />
    </Stack.Navigator>
  );
}
