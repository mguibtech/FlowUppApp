import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnalysisProvider, AnalysisScreen, CalendarScreen } from '@screens';
import { SearchScreen } from '@screens';

export type AppAnalysisStackParamList = {
  AnalysisScreen: undefined;
  CalendarScreen: undefined;
  SearchScreen: undefined;
};

export function AppAnalysisStack() {
  const Stack = createNativeStackNavigator<AppAnalysisStackParamList>();

  return (
    <AnalysisProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AnalysisScreen"
      >
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="AnalysisScreen" component={AnalysisScreen} />
      </Stack.Navigator>
    </AnalysisProvider>
  );
}
