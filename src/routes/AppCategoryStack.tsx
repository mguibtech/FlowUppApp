import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoriesScreen,
  Category,
  ListItemsCategoryScreen,
  NewSavingTransactionScreen,
  NewTransactionScreen,
  SavingsListScreen,
  SavingsScreen,
} from '@screens';
import { DefaultCategories } from '@types';

export type AppCategoryStackParamList = {
  CategoriesScreen: undefined;
  AddNewCategoryScreen: undefined;
  ListItemsCategoryScreen: { category: Category };
  NewTransactionScreen: {
    categories: DefaultCategories | DefaultCategories[];
  };
  SavingsScreen: undefined;
  SavingsListScreen: {
    category: Category;
  };
  NewSavingTransactionScreen: {
    categories: DefaultCategories | DefaultCategories[];
  };
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
        name="ListItemsCategoryScreen"
        component={ListItemsCategoryScreen}
      />
      <Stack.Screen
        name="NewTransactionScreen"
        component={NewTransactionScreen}
      />
      <Stack.Screen name="SavingsScreen" component={SavingsScreen} />
      <Stack.Screen name="SavingsListScreen" component={SavingsListScreen} />
      <Stack.Screen
        name="NewSavingTransactionScreen"
        component={NewSavingTransactionScreen}
      />
    </Stack.Navigator>
  );
}
