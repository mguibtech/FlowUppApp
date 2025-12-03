import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AnalysisProvider,
  ProfileScreen,
  EditProfileScreen,
  SecurityScreen,
} from '@screens';

export type AppProfileStackParamList = {
  EditProfileScreen: undefined;
  ProfileScreen: undefined;
  SecurityScreen: undefined;
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
      </Stack.Navigator>
    </AnalysisProvider>
  );
}
