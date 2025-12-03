import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeScreen, TransactionsScreen } from '@screens';
import { AppTabBar } from './AppTabBar';
import { AppAnalysisStack } from './AppAnalysisStack';
import { AppCategoryStack } from './AppCategoryStack';
import { AppProfileStack } from './AppProfileScreen';

export type AppBottomTabParamList = {
  HomeScreen: undefined;
  TransactionScreen: undefined;
  AppAnalysisStack: undefined;
  AppCategoryStack: undefined;
  AppProfileStack: undefined;
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
      <Tab.Screen name="AppAnalysisStack" component={AppAnalysisStack} />
      <Tab.Screen name="TransactionScreen" component={TransactionsScreen} />
      <Tab.Screen name="AppCategoryStack" component={AppCategoryStack} />
      <Tab.Screen name="AppProfileStack" component={AppProfileStack} />
    </Tab.Navigator>
  );
}
