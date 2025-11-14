import React from 'react';

import { Picker } from '@react-native-picker/picker';
import { useTheme } from '@shopify/restyle';

import { ActivityIndicator, Box, Text } from '@components';
import { Theme } from '@theme';

export type Option<T extends string = string> = {
  label: string;
  value: T; // literal seguro (ex.: 'CONVENCIONAL' | 'FRETAMENTO')
  disabled?: boolean;
};

type Props<T extends string = string> = {
  readonly label?: string;
  readonly placeholder?: string;
  readonly items: ReadonlyArray<Option<T>>; // NÃO inclui placeholder
  readonly value: T | null; // null = nada selecionado
  readonly onValueChange: (value: T | null) => void;
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly errorMessage?: string;
};

export function SelectInput<T extends string = string>({
  label,
  errorMessage,
  placeholder = 'Selecione uma opção',
  items,
  value,
  onValueChange,
  disabled = false,
  loading = false,
}: Props<T>) {
  const theme = useTheme<Theme>();

  return (
    <Box marginVertical="s12">
      {label && (
        <Text
          marginBottom="s8"
          color="backgroundContrast"
          preset="paragraphSmall"
        >
          {label}
        </Text>
      )}

      <Box
        borderWidth={errorMessage ? 2 : 1}
        borderRadius="s32"
        borderColor="primary"
        backgroundColor="background"
        paddingHorizontal="s12"
        justifyContent="center"
        alignItems="flex-start"
        minHeight={40}
        paddingVertical="s4"
        opacity={disabled ? 0.6 : 1}
      >
        {loading ? (
          <Box
            flexDirection="row"
            alignItems="center"
            gap="s8"
            paddingVertical="s4"
          >
            <ActivityIndicator color="primary" />
            <Text color="backgroundContrast" preset="paragraphSmall">
              Carregando...
            </Text>
          </Box>
        ) : (
          <Picker
            selectedValue={(value ?? '') as string} // null -> ''
            onValueChange={itemValue => {
              const s = String(itemValue);
              onValueChange(s === '' ? null : (s as T)); // '' -> null
            }}
            enabled={!disabled}
            style={{
              color: theme.colors.backgroundContrast,
              fontSize: 14,
              width: '100%',
              marginVertical: -8,
            }}
            itemStyle={{
              fontSize: 14,
            }}
          >
            <Picker.Item
              label={placeholder}
              value=""
              color={theme.colors.backgroundContrast}
            />
            {items.map(item => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
                color={theme.colors.backgroundContrast}
                enabled={item.disabled !== true}
              />
            ))}
          </Picker>
        )}
      </Box>
      {errorMessage && (
        <Text color="error" preset="paragraphSmall">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}
