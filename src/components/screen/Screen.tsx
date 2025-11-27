import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, BoxProps, IconProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';
import { ScreenHeader } from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  subtitle?: string;
  icon?: IconProps['name'];
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  icon,
  subtitle,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.primary}>
        <Box flex={1} style={[{ paddingTop: top }, style]} {...boxProps}>
          <ScreenHeader
            canGoBack={canGoBack}
            title={title}
            icon={icon}
            subtitle={subtitle}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
