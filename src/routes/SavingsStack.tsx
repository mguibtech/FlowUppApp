import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SavingsScreen, SavingListScreen, Category } from '@screens';

export type SavingsStackParamList = {
  SavingsScreen: undefined;
  SavingListScreen: {
    listSavings: Category[];
  };
};

const Stack = createNativeStackNavigator<SavingsStackParamList>();

export function SavingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SavingsScreen"
    >
      <Stack.Screen name="SavingsScreen" component={SavingsScreen} />
      <Stack.Screen name="SavingListScreen" component={SavingListScreen} />
    </Stack.Navigator>
  );
}
