import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Box, Button, Icon, Text, TextInput } from '@components';
import { AuthScreenProps } from '@routes';

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
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
              Crie sua conta
            </Text>
          </Box>

          <Box
            backgroundColor="greenHoneydew"
            flex={1}
            borderTopLeftRadius="s48"
            borderTopRightRadius="s48"
            paddingTop="s36"
          >
            <TextInput
              label="Nome completo"
              placeholder="Digite seu nome completo"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's10',
              }}
            />

            <TextInput
              label="Email"
              placeholder="Digite seu email"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's10',
              }}
            />
            <TextInput
              label="Telefone"
              placeholder="Digite seu telefone"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's10',
              }}
            />

            <TextInput
              label="Data de nascimento"
              placeholder="Digite sua data de nascimento"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's10',
              }}
            />

            <TextInput
              label="Senha"
              placeholder="***********"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's10',
              }}
              rightComponent={
                <Icon name="eyeOff" size={24} color="primaryContrast" />
              }
            />
            <TextInput
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              boxProps={{
                marginHorizontal: 's36',
                marginTop: 's10',
              }}
            />

            <Box marginTop="s24" alignItems="center" mb="s24">
              <Text
                preset="paragraphCaptionSmall"
                marginTop="s16"
                textAlign="center"
                marginHorizontal="s36"
                mb="s16"
                color="primaryContrast"
              >
                Ao criar uma conta, você concorda com os
                <Text bold preset="paragraphCaptionSmall">
                  {' '}
                  Termos de Uso
                </Text>{' '}
                e a{' '}
                <Text bold preset="paragraphCaptionSmall">
                  {' '}
                  Política de Privacidade
                </Text>
              </Text>
              <Button title="Criar conta" onPress={() => {}} width={207} />
              <Text preset="paragraphSmall" marginTop="s16" textAlign="center">
                Ja tem uma conta?{' '}
                <Text
                  bold
                  color="blueOcean"
                  onPress={() => navigation.goBack()}
                >
                  Entrar
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
