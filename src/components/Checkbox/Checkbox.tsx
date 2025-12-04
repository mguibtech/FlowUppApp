import React, { useCallback } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Box, Icon, Text, TouchableOpacityBox } from '@components';

export interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  style?: ViewStyle;
  hitSlop?: number | object;
}

export function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  hitSlop = 8,
}: CheckboxProps) {
  const handlePress = useCallback(() => {
    if (!disabled) onChange(!checked);
  }, [checked, disabled, onChange]);

  return (
    <TouchableOpacityBox
      onPress={handlePress}
      disabled={disabled}
      hitSlop={hitSlop}
    >
      <Box flexDirection="row" alignItems="center" gap="s12">
        <Box
          width={24}
          height={24}
          borderRadius="s4"
          borderWidth={checked ? 0 : 1}
          borderColor={checked ? 'greenCyprus' : 'primaryContrast'}
          justifyContent="center"
          alignItems="center"
        >
          {checked && (
            <Icon name="check" color="backgroundContrast" size={24} />
          )}
        </Box>

        {label && (
          <Text
            preset="paragraphMedium"
            color={disabled ? 'gray' : 'backgroundContrast'}
          >
            {label}
          </Text>
        )}
      </Box>
    </TouchableOpacityBox>
  );
}
