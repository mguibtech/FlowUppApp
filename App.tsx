/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/theme/theme';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <LoginScreen />
      </SafeAreaProvider >
    </ThemeProvider>
  );
}


export default App;
