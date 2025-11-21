import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Box, Text, TextInput, Icon, Button } from '@components';
import { AuthScreenProps } from '@routes';

export function ForgotPassword({
  navigation,
}: AuthScreenProps<'ForgotPassword'>) {
  const handleCreateAccount = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleSecurityPin = () => {
    navigation.navigate('SecurityPinScreen');
  };
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
              Esqueceu sua senha?
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
            <Text preset="headingSmall" color="primaryContrast" bold>
              Recuperar senha
            </Text>
            <Text
              preset="paragraphMedium"
              color="primaryContrast"
              mt="s10"
              mb="s56"
            >
              Digite o email cadastrado para receber um código de recuperação
            </Text>
            <TextInput label="Digite seu email" placeholder="seu@email.com" />
            <Box marginTop="s24" alignItems="center">
              <Box marginTop="s24" mb="s20" alignItems="center">
                <Button
                  title="Proximo"
                  onPress={handleSecurityPin}
                  titlePreset={{
                    preset: 'headingSmall',
                  }}
                  width={207}
                />
              </Box>

              <Box marginTop="s56" alignItems="center">
                <Button
                  title="Criar conta"
                  onPress={handleCreateAccount}
                  preset="outline"
                  width={207}
                  titlePreset={{
                    preset: 'headingSmall',
                  }}
                />
              </Box>
              <Text
                preset="paragraphSmall"
                color="primaryContrast"
                textAlign="center"
                mt="s24"
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
