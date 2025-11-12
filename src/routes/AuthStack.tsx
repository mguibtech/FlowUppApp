import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ForgotPassword } from "../screens/auth/ForgotPassword/ForgotPassword";
import { SignUpScreen } from "../screens/auth/SignUpScreen/SignUpScreen";
import { SecurityPinScreen } from "../screens/auth/SecurityPinScreen/SecurityPinScreen";


type AuthStackParamList = {
    Login: undefined;
    SignUpScreen: undefined;
    ForgotPassword: undefined;
    SecurityPinScreen: undefined;
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
        </Stack.Navigator>
    );
}