import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import { Text, TextInput, Icon, Button, Box } from '@components';
import { AuthScreenProps } from '@routes';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  function handleSingIn() {
    navigation.navigate('SignUpScreen' as never);
  }

  function handleForgotPassword() {
    navigation.navigate('ForgotPassword' as never);
  }

  function handleFingerprint() {
    navigation.navigate('FingerprintScreen' as never);
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
              Bem Vindo(a)
            </Text>
          </Box>

          <Box
            backgroundColor="greenHoneydew"
            flex={1}
            borderTopLeftRadius="s48"
            borderTopRightRadius="s48"
            paddingTop="s56"
          >
            <TextInput
              label="Email"
              placeholder="Digite seu email"
              boxProps={{
                marginHorizontal: 's36',
              }}
            />

            <TextInput
              label="Senha"
              placeholder="***********"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's24',
              }}
              rightComponent={
                <Icon name="eyeOff" size={24} color="primaryContrast" />
              }
            />

            <Box marginTop="s56" alignItems="center">
              <Button title="Entrar" onPress={() => {}} width={207} />
              <Pressable onPress={handleForgotPassword}>
                <Text
                  preset="paragraphSmall"
                  color="blueOcean"
                  marginTop="s16"
                  bold
                >
                  Esqueceu sua senha?
                </Text>
              </Pressable>

              <Button
                title="Criar conta"
                onPress={handleSingIn}
                width={227}
                preset="outline"
                marginTop="s14"
              />

              <Pressable onPress={() => {}}>
                <Text
                  preset="paragraphSmall"
                  color="primaryContrast"
                  marginTop="s16"
                  bold
                >
                  Usar{' '}
                  <Text onPress={handleFingerprint} bold color="blueOcean">
                    digital
                  </Text>{' '}
                  para acessar
                </Text>
              </Pressable>

              <Box justifyContent="center" alignItems="center" mt="s24">
                <Text preset="paragraphCaptionSmall">
                  ou crie uma conta usando
                </Text>
                <Box flexDirection="row" gap="s16" marginTop="s16" mb="s20">
                  <Icon name="facebook" size={32} color="primaryContrast" />
                  <Icon name="google" size={32} color="primaryContrast" />
                </Box>
                <Text preset="paragraphSmall">
                  Não tem uma conta?{' '}
                  <Text
                    preset="paragraphSmall"
                    onPress={handleSingIn}
                    bold
                    color="blueOcean"
                  >
                    Crie uma agora
                  </Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
