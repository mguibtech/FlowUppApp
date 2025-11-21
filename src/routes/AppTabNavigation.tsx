import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  TransactionsScreen,
  CategoriesScreen,
  AnalysisScreen,
  ProfileScreen,
} from '@screens';
import { AppTabBar } from './AppTabBar';
import { AppAnalysisStack } from './AppAnalysisStack';

export type AppBottomTabParamList = {
  HomeScreen: undefined;
  TransactionScreen: undefined;
  CategoriesScreen: undefined;
  AnalysisScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

export function AppTabNavigation() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AnalysisScreen" component={AppAnalysisStack} />
      <Tab.Screen name="TransactionScreen" component={TransactionsScreen} />
      <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
