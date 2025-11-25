import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from '@components';

type RadioButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
};

export function RadioButton({
  label,
  selected,
  onPress,
  disabled = false,
}: RadioButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Box
          width={20}
          height={20}
          borderRadius="s20"
          borderWidth={1}
          borderColor="greenLight"
          backgroundColor={selected ? 'primary' : 'white'}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <Box
              width={8}
              height={8}
              borderRadius="s4"
              backgroundColor="white"
            />
          )}
        </Box>
        <Text preset="paragraphMedium" color="backgroundContrast">
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

type RadioGroupProps<T extends string> = {
  options: ReadonlyArray<{ label: string; value: T }>;
  value: T | null;
  onValueChange: (value: T) => void;
  disabled?: boolean;
};

export function RadioGroup<T extends string>({
  options,
  value,
  onValueChange,
  disabled = false,
}: RadioGroupProps<T>) {
  return (
    <Box flexDirection="row" gap="s24" marginTop="s12">
      {options.map(option => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={value === option.value}
          onPress={() => onValueChange(option.value)}
          disabled={disabled}
        />
      ))}
    </Box>
  );
}
