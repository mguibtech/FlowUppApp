import { createStackNavigator } from '@react-navigation/stack';
import { NotificationScreen } from '@screens';
import { AppTabNavigation } from '@routes';

export type AppStackParamList = {
  AppTabNavigation: undefined;
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
      <Stack.Screen name="AppTabNavigation" component={AppTabNavigation} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
}
