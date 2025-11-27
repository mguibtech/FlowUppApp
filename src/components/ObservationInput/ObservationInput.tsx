import React, { useEffect, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useTheme } from '@shopify/restyle';

import { Box, Text } from '@components';
import { Theme } from '@theme';

interface ObservationInputProps extends TextInputProps {
  label?: string;
  editableComponent?: boolean; // nova prop
  errorMessage?: string;
}

export function ObservationInput({
  label = 'Observação:',
  value,
  onChangeText,
  onBlur,
  editableComponent = true, // padrão: editável
  errorMessage,
  ...rest
}: ObservationInputProps) {
  const theme = useTheme<Theme>();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (value) {
      setError(false);
    } else {
      setError(true);
    }
  }, [value]);

  return (
    <Box>
      {label && (
        <Text mb="s4" preset="paragraphMedium">
          {label}
        </Text>
      )}

      <TextInput
        multiline
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        editable={editableComponent}
        style={{
          borderRadius: theme.borderRadii.s8,
          padding: theme.spacing.s12,
          textAlignVertical: 'top',
          fontSize: 14,
          backgroundColor: theme.colors.greenLight,
          minHeight: 120,
          height: 120,
          opacity: editableComponent ? 1 : 0.6, // feedback visual
        }}
        {...rest}
      />

      {errorMessage && error && (
        <Text color="error" preset="paragraphSmall">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}
