import React from 'react';
import { Switch, SwitchProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme';
import { Box, Text } from '@components';

interface ToggleSwitchProps
  extends Omit<SwitchProps, 'trackColor' | 'thumbColor'> {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export function ToggleSwitch({
  value,
  onValueChange,
  label,
  ...switchProps
}: ToggleSwitchProps) {
  const theme = useTheme<Theme>();

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text preset="paragraphMedium">{label}</Text>
      </Box>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: theme.colors.greenLight,
          true: theme.colors.greenPrimary,
        }}
        thumbColor={theme.colors.white}
        ios_backgroundColor={theme.colors.greenLight}
        {...switchProps}
      />
    </Box>
  );
}
