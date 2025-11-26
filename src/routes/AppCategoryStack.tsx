import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddNewCategoryScreen,
  CategoriesScreen,
  Category,
  ListItemsCategoryScreen,
  NewTransactionScreen,
} from '@screens';

export type AppCategoryStackParamList = {
  CategoriesScreen: undefined;
  AddNewCategoryScreen: undefined;
  ListItemsCategoryScreen: { category: Category };
  NewTransactionScreen: undefined;
};

const Stack = createNativeStackNavigator<AppCategoryStackParamList>();

export function AppCategoryStack() {
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
