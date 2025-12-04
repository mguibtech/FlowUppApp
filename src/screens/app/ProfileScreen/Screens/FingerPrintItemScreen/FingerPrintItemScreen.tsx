import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import { Box, Text, Button, Icon, Screen, BodyBox } from '@components';

import { AppProfileScreenProps, AuthScreenProps } from '@routes';
import { FingerprintDeleteModal } from '../../Components/FingerprintDeleteModal';

export function FingerPrintItemScreen({
  navigation,
}: AppProfileScreenProps<'FingerPrintItemScreen'>) {
  const [deleteFingerprintModalVisible, setDeleteFingerprintModalVisible] =
    useState(false);

  const handleDeleteFingerprint = () => {
    setDeleteFingerprintModalVisible(false);
  };

  const handleCloseFingerprintDeleteModal = () => {
    setDeleteFingerprintModalVisible(false);
  };

  const handleOpenFingerprintDeleteModal = () => {
    console.log('Abrir modal de deletar digital');
    setDeleteFingerprintModalVisible(true);
  };

  return (
    <Screen canGoBack title="Impressão digital" icon="notification">
      <BodyBox
        flex={1}
        mt="s56"
        paddingTop="s56"
        alignContent="center"
        alignItems="center"
      >
        <Box mt="s32">
          <Icon name="fingerprint" color="white" size={160} />
        </Box>
        <Box
          backgroundColor="greenLight"
          borderRadius="s16"
          mt="s44"
          paddingHorizontal="s56"
          paddingVertical="s4"
          mb="s36"
        >
          <Text preset="headingSmall" color="primaryContrast" bold>
            Guibson digital
          </Text>
        </Box>
        <Button
          title="Deletar digital"
          mt="s56"
          onPress={handleOpenFingerprintDeleteModal}
        />
      </BodyBox>
    </Screen>
  );
}
