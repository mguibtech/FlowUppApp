import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import { Box, Text, Button, Icon } from '@components';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@routes';

type NavigationProp = StackNavigationProp<AuthStackParamList>;

export function FingerprintScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleUseTouchId = () => {
    // Aqui você pode adicionar a lógica de autenticação biométrica
    console.log('Usar Touch ID');
  };

  const handleUsePinCode = () => {
    navigation.navigate('ForgotPassword');
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
          {/* Header */}
          <Box
            alignItems="center"
            justifyContent="center"
            paddingVertical="s56"
          >
            <Text preset="headingMedium" color="primaryContrast">
              Digital de Segurança
            </Text>
          </Box>

          {/* Conteúdo principal */}
          <Box
            backgroundColor="greenHoneydew"
            flex={1}
            borderTopLeftRadius="s48"
            borderTopRightRadius="s48"
            paddingTop="s56"
            paddingHorizontal="s36"
            alignItems="center"
          >
            {/* Círculo teal grande (195x195) com ícone de fingerprint */}
            <Box
              style={{ width: 195, height: 195, borderRadius: 97.5 }}
              backgroundColor="greenPrimary"
              alignItems="center"
              justifyContent="center"
              marginBottom="s40"
            >
              <Icon name="fingerprint" color="white" size={120} />
            </Box>

            {/* Texto principal */}
            <Text
              preset="headingSmall"
              color="primaryContrast"
              bold
              textAlign="center"
              marginBottom="s20"
            >
              Use Sua Digital Para Acessar
            </Text>

            {/* Texto descritivo */}
            <Text
              preset="paragraphMedium"
              color="primaryContrast"
              textAlign="center"
              marginBottom="s48"
            >
              Toque no sensor de impressão digital para autenticar e acessar sua
              conta de forma segura.
            </Text>

            {/* Botão verde claro */}
            <Box width="100%" alignItems="center" marginBottom="s24">
              <Button
                title="Usar Touch ID"
                onPress={handleUseTouchId}
                preset="outline"
                titlePreset={{
                  preset: 'headingSmall',
                }}
                width={237}
              />
            </Box>

            {/* Link para usar PIN */}
            <Box alignItems="center">
              <Pressable onPress={handleUsePinCode}>
                <Text
                  preset="paragraphSmall"
                  color="primaryContrast"
                  textAlign="center"
                  onPress={handleUsePinCode}
                >
                  Ou prefere usar código PIN?
                </Text>
              </Pressable>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
