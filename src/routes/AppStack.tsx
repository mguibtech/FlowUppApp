import { createStackNavigator } from '@react-navigation/stack';
import { AppTabNavigation } from '@routes';
import {
  AccountBalanceScreen,
  NotificationScreen,
  QuicklyAnalysisScreen,
} from '@screens';

export type AppStackParamList = {
  AppTabNavigation: undefined;
  NotificationScreen: undefined;
  AccountBalanceScreen: undefined;
  QuicklyAnalysisScreen: undefined;
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
      <Stack.Screen
        name="AccountBalanceScreen"
        component={AccountBalanceScreen}
      />
      <Stack.Screen
        name="QuicklyAnalysisScreen"
        component={QuicklyAnalysisScreen}
      />
    </Stack.Navigator>
  );
}
