import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddNewCategoryScreen,
  CategoriesScreen,
  ListItemsCategoryScreen,
  NewTransactionScreen,
} from '@screens';

export type AppCategoryStackParamList = {
  CategoriesScreen: undefined;
  AddNewCategoryScreen: undefined;
  ListItemsCategoryScreen: undefined;
  NewTransactionScreen: undefined;
};

export function AppCategoryStack() {
  const Stack = createNativeStackNavigator<AppCategoryStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CategoriesScreen"
    >
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="AddNewCategoryScreen"
        component={AddNewCategoryScreen}
      />
      <Stack.Screen
        name="ListItemsCategoryScreen"
        component={ListItemsCategoryScreen}
      />
      <Stack.Screen
        name="NewTransactionScreen"
        component={NewTransactionScreen}
      />
    </Stack.Navigator>
  );
}
