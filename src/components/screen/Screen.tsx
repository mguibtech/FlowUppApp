import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';



import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { ScreenHeader } from './components/ScreenHeader';
import { Box, BoxProps } from '../Box/Box';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ThemeColors } from '../../theme/theme';

export interface ScreenProps extends BoxProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
    title?: string;
    containerBackgroundColor?: ThemeColors;
}

export function Screen({
    children,
    canGoBack = false,
    scrollable = false,
    title,
    style,
    backgroundColor,
    containerBackgroundColor,
    ...boxProps
}: ScreenProps) {
    const { bottom, top } = useAppSafeArea();
    const { colors } = useAppTheme();

    const containerBgColor = containerBackgroundColor
        ? colors[containerBackgroundColor]
        : colors.backgroundContrast;

    const Container = scrollable ? ScrollViewContainer : ViewContainer;
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={containerBgColor}>
                <Box
                    // paddingHorizontal="s24"
                    style={[{ paddingTop: top, paddingBottom: bottom }, style]}
                    backgroundColor={backgroundColor}
                    {...boxProps}>
                    <ScreenHeader canGoBack={canGoBack} title={title} />
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    );
}
