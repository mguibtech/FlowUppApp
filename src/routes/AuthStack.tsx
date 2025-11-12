import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SingInScreen } from "../screens/auth/SingInScreen.tsx/SingInScreen";


type AuthStackParamList = {
    Login: undefined;
    SingInScreen: undefined;
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
            <Stack.Screen name="SingInScreen" component={SingInScreen} />
        </Stack.Navigator>
    );
}