import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AnalysisProvider,
  ProfileScreen,
  EditProfileScreen,
  SecurityScreen,
  ChangePinScreen,
  FingerprintListScreen,
  FingerprintScreen,
  FingerPrintItemScreen,
  AddFingerprintScreen,
} from '@screens';

export type AppProfileStackParamList = {
  EditProfileScreen: undefined;
  ProfileScreen: undefined;
  SecurityScreen: undefined;
  ChangePinScreen: undefined;
  FingerprintListScreen: undefined;
  FingerPrintItemScreen: undefined;
  AddFingerprintScreen: undefined;
};

export function AppProfileStack() {
  const Stack = createNativeStackNavigator<AppProfileStackParamList>();

  return (
    <AnalysisProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ProfileScreen"
      >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
        <Stack.Screen name="ChangePinScreen" component={ChangePinScreen} />
        <Stack.Screen
          name="FingerprintListScreen"
          component={FingerprintListScreen}
        />
        <Stack.Screen
          name="FingerPrintItemScreen"
          component={FingerPrintItemScreen}
        />
        <Stack.Screen
          name="AddFingerprintScreen"
          component={AddFingerprintScreen}
        />
      </Stack.Navigator>
    </AnalysisProvider>
  );
}
