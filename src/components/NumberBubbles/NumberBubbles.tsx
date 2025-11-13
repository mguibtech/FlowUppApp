import React, { useRef, useEffect } from 'react';
import { TextInput } from 'react-native';
import { Box, Text } from '@components';

type NumberBubblesProps = {
  length?: number; // quantidade de dígitos, ex: 6
  value: string;
  onChange: (value: string) => void;
  size?: number;
  autoFocus?: boolean;
  secureTextEntry?: boolean; // Se true, mostra • ao invés do número
};

export function NumberBubbles({
  length = 6,
  value,
  onChange,
  size = 40,
  autoFocus = true,
  secureTextEntry = false,
}: NumberBubblesProps) {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus) {
      // Pequeno delay para garantir que o componente está montado
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [autoFocus]);

  const handlePress = () => {
    inputRef.current?.focus();
  };

  const handleChangeText = (text: string) => {
    // Remove qualquer caractere que não seja número
    const numbersOnly = text.replaceAll(/\D/g, '');

    // Limita ao tamanho máximo
    const limitedValue = numbersOnly.slice(0, length);

    onChange(limitedValue);
  };

  const digits = value.split('');

  return (
    <Box alignItems="center" marginVertical="s24">
      {/* Input invisível para capturar os números */}
      <TextInput
        ref={inputRef}
        keyboardType="number-pad"
        maxLength={length}
        value={value}
        onChangeText={handleChangeText}
        autoFocus={autoFocus}
        secureTextEntry={false} // Sempre false aqui, pois vamos controlar a exibição manualmente
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0,
        }}
      />

      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        onTouchStart={handlePress}
      >
        {Array.from({ length }).map((_, i) => {
          const filled = digits[i];
          const isActive = i === value.length;

          let borderColorValue: 'primary' | 'backgroundContrast' =
            'backgroundContrast';
          if (filled || isActive) {
            borderColorValue = 'primary';
          }

          return (
            <Box
              key={`pin-bubble-${i}-${filled || 'empty'}`}
              width={size}
              height={size}
              borderRadius="s16"
              borderWidth={2}
              borderColor={borderColorValue}
              alignItems="center"
              justifyContent="center"
              marginHorizontal="s8"
              backgroundColor={filled ? 'primary' : 'background'}
            >
              {filled ? (
                <Text preset="headingSmall" color="primaryContrast" bold>
                  {secureTextEntry ? '•' : filled}
                </Text>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
