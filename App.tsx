/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/theme/theme';
import { Text } from './src/components/Text/Text';
import { Box } from './src/components/Box/Box';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Box>
          <Text>Hello World</Text>
        </Box >
      </SafeAreaProvider >
    </ThemeProvider>
  );
}


export default App;
