import { AuthStackParamList } from './AuthStack';
import { AppStackParamList } from './AppStack';
import { AppBottomTabParamList } from './AppTabNavigation';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppCategoryStackParamList } from './AppCategoryStack';
import { AppAnalysisStackParamList } from './AppAnalysisStack';
import { AppProfileStackParamList } from './AppProfileScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppTabScreenProps<RouteName extends keyof AppBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppBottomTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigation'>
  >;

export type AppCategoryScreenProps<
  RouteName extends keyof AppCategoryStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<AppCategoryStackParamList, RouteName>,
  NativeStackScreenProps<AppCategoryStackParamList, 'CategoriesScreen'>
>;

export type AppAnalysisScreenProps<
  RouteName extends keyof AppAnalysisStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<AppAnalysisStackParamList, RouteName>,
  NativeStackScreenProps<AppAnalysisStackParamList, 'AnalysisScreen'>
>;

export type AppProfileScreenProps<
  RouteName extends keyof AppProfileStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<AppProfileStackParamList, RouteName>,
  NativeStackScreenProps<AppProfileStackParamList, 'ProfileScreen'>
>;
