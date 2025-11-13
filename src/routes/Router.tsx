import { NavigationContainer } from '@react-navigation/native';
import { AppStack, AuthStack } from '@routes';
import { useState } from 'react';

export function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
