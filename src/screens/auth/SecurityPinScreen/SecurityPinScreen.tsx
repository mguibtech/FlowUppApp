import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Box, Button, Text, Icon, NumberBubbles } from '@components';
import { AuthScreenProps } from '@routes';

export function SecurityPinScreen({
  navigation,
}: AuthScreenProps<'SecurityPinScreen'>) {
  const [pin, setPin] = useState('');

  const handleCreateAccount = () => {
    navigation.navigate('SignUpScreen');
  };

  const handlePinChange = (value: string) => {
    setPin(value);
  };

  const handleNext = () => {
    if (pin.length === 6) {
      navigation.navigate('NewPasswordScreen');
    }
  };

  function handleSendAggin() {
    Alert.alert('PIN digitado:', pin);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Box flex={1} backgroundColor="greenPrimary">
          <Box
            alignItems="center"
            justifyContent="center"
            paddingVertical="s56"
          >
            <Text preset="headingMedium" color="primaryContrast">
              Pin de segurança
            </Text>
          </Box>

          <Box
            backgroundColor="greenHoneydew"
            flex={1}
            borderTopLeftRadius="s48"
            borderTopRightRadius="s48"
            paddingTop="s56"
            paddingHorizontal="s36"
          >
            <Text
              preset="headingSmall"
              textAlign="center"
              color="primaryContrast"
              semibold
            >
              Digite o pin de segurança
            </Text>

            <NumberBubbles
              value={pin}
              onChange={handlePinChange}
              length={6}
              autoFocus={true}
            />

            <Box marginTop="s24" alignItems="center">
              <Box marginTop="s24" mb="s20" alignItems="center">
                <Button
                  title="Proximo"
                  onPress={handleNext}
                  disabled={pin.length !== 6}
                  titlePreset={{
                    preset: 'headingSmall',
                  }}
                  width={237}
                />
              </Box>

              <Box alignItems="center" mb="s56">
                <Button
                  title="Enviar novamente"
                  onPress={handleSendAggin}
                  preset="outline"
                  width={237}
                  titlePreset={{
                    preset: 'headingSmall',
                  }}
                />
              </Box>
              <Text
                marginTop="s56"
                preset="paragraphSmall"
                color="primaryContrast"
                textAlign="center"
              >
                ou criar uma conta com
              </Text>
              <Box
                marginTop="s8"
                alignItems="center"
                flexDirection="row"
                gap="s16"
                justifyContent="center"
              >
                <Icon name="google" size={32} color="primaryContrast" />
                <Icon name="facebook" size={32} color="primaryContrast" />
              </Box>
              <Text mt="s24">
                Não tem uma conta?{' '}
                <Text
                  preset="paragraphSmall"
                  color="blueOcean"
                  bold
                  onPress={handleCreateAccount}
                >
                  Crie uma
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
