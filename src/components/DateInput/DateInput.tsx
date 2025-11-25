import React, { useState } from 'react';
import { Modal, Platform, Pressable, TextStyle } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Box, BoxProps, Icon, Text } from '@components';
import { theme } from '@theme';
import { formatDate } from '@utils';
import { $fontFamily, $fontSizes } from '../Text/Text';

interface DateInputProps {
  readonly label?: string;
  readonly value?: Date | null; // aceitar null também
  readonly onChange?: (date: Date) => void;
  readonly errorMessage?: string;
  readonly boxProps?: BoxProps;
  readonly placeholder?: string;
  readonly minimumDate?: Date;
  readonly maximumDate?: Date;
}

export function DateInput({
  label,
  value,
  onChange,
  errorMessage,
  boxProps,
  placeholder = 'Selecione uma data',
  minimumDate,
  maximumDate,
}: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | null>(null);

  // se value for passado, componente é controlado
  const isControlled = value !== undefined;
  const currentDate = (isControlled ? value : internalDate) ?? null;

  const handleInternalChange = (date: Date) => {
    if (!isControlled) {
      setInternalDate(date);
    }
    onChange?.(date);
  };

  const handleDateChange = (event: DateTimePickerEvent, date?: Date): void => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
      if (event.type === 'set' && date) {
        handleInternalChange(date);
      }
      return;
    }

    // iOS: atualiza somente o estado (ou parent, se quiser) enquanto seleciona
    if (date) {
      if (isControlled) {
        // se quiser que o parent veja a mudança em tempo real:
        // onChange?.(date);
      } else {
        setInternalDate(date);
      }
    }
  };

  const displayValue = currentDate
    ? formatDate(currentDate, placeholder)
    : placeholder;

  const isPlaceholder = currentDate === null;

  const $dateInputContainer: BoxProps = {
    borderWidth: errorMessage ? 1 : undefined,
    borderColor: errorMessage ? 'error' : undefined,
    paddingHorizontal: 's12',
    paddingVertical: 's8',
    paddingStart: 's32',
    borderRadius: 's32',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'greenLight',
    overflow: 'hidden',
  };

  return (
    <Box {...boxProps}>
      {label && (
        <Text color="backgroundContrast" preset="paragraphSmall">
          {label}
        </Text>
      )}

      <Pressable onPress={() => setShowPicker(true)}>
        <Box {...$dateInputContainer}>
          <Text
            style={[
              $dateInputStyle,
              isPlaceholder && { opacity: 0.4 },
              !isPlaceholder && { color: theme.colors.greenCyprus },
            ]}
          >
            {displayValue}
          </Text>
          <Box
            ml="s16"
            width={40}
            height={40}
            borderRadius="s20"
            backgroundColor="primary"
            justifyContent="center"
            alignItems="center"
          >
            <Icon name="calendar" size={20} />
          </Box>
        </Box>
      </Pressable>

      {errorMessage && (
        <Box marginTop="s4">
          <Text
            style={{
              color: theme.colors.greenCyprus,
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {errorMessage}
          </Text>
        </Box>
      )}

      {showPicker && (
        <>
          {Platform.OS === 'ios' ? (
            <Modal
              visible={showPicker}
              transparent
              animationType="slide"
              onRequestClose={() => setShowPicker(false)}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  justifyContent: 'flex-end',
                }}
                onPress={() => setShowPicker(false)}
              >
                <Pressable
                  onPress={e => e.stopPropagation()}
                  style={{
                    backgroundColor: theme.colors.white,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 20,
                  }}
                >
                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    marginBottom="s16"
                  >
                    <Pressable onPress={() => setShowPicker(false)}>
                      <Text color="primary" semibold>
                        Cancelar
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (currentDate) {
                          handleInternalChange(currentDate);
                        }
                        setShowPicker(false);
                      }}
                    >
                      <Text color="primary" semibold>
                        Confirmar
                      </Text>
                    </Pressable>
                  </Box>
                  <DateTimePicker
                    value={currentDate || new Date()}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                  />
                </Pressable>
              </Pressable>
            </Modal>
          ) : (
            <DateTimePicker
              value={currentDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
            />
          )}
        </>
      )}
    </Box>
  );
}

const $dateInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
