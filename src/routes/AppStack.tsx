import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, NotificationScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  NotificationScreen: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
}
