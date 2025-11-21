import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Box, Button, Text, TextInput, Icon, LoadingScreen } from '@components';
import { AuthScreenProps } from '@routes';

export function NewPasswordScreen({
  navigation,
}: AuthScreenProps<'NewPasswordScreen'>) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSavePassword = async () => {
    if (!password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      // Aqui você pode adicionar um alerta de erro
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 2000); // Simula 2 segundos de loading
  };

  const handleAnimationComplete = () => {
    // Navega para a tela de login após mostrar o sucesso
    navigation.navigate('LoginScreen');
  };

  if (isLoading) {
    return <LoadingScreen status="loading" message="Salvando nova senha..." />;
  }

  if (showSuccess) {
    return (
      <LoadingScreen
        status="success"
        message="Senha salva com sucesso"
        onAnimationComplete={handleAnimationComplete}
      />
    );
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
              Nova senha
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
            <Box gap="s24">
              <TextInput
                label="Digite sua nova senha"
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                rightComponent={
                  <Icon
                    name={showPassword ? 'eyeOn' : 'eyeOff'}
                    size={24}
                    color="primaryContrast"
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
              <TextInput
                label="Confirme sua nova senha"
                placeholder="********"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                rightComponent={
                  <Icon
                    name={showConfirmPassword ? 'eyeOn' : 'eyeOff'}
                    size={24}
                    color="primaryContrast"
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                }
              />
            </Box>

            <Box marginTop="s56" alignItems="center">
              <Button
                title="Salvar nova senha"
                onPress={handleSavePassword}
                disabled={!password || !confirmPassword}
                titlePreset={{
                  preset: 'headingSmall',
                }}
                width={300}
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
