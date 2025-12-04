import React, { useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback, FlatList } from 'react-native';

import { Box, Text, Button, TextInput, Icon } from '@components';

export interface NewCategoryModalProps {
  readonly visible: boolean;
  readonly onClose: () => void;
  readonly onDelete: () => void;
}

export function FingerprintDeleteModal({
  visible,
  onClose,
  onDelete,
}: NewCategoryModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <TouchableWithoutFeedback>
            <Box
              width="90%"
              maxWidth={400}
              backgroundColor="background"
              borderRadius="s24"
              padding="s24"
            >
              <Text
                preset="headingMedium"
                textAlign="center"
                color="greenCyprus"
              >
                Deletar digital?
              </Text>
              <Text
                preset="paragraphMedium"
                textAlign="center"
                color="greenCyprus"
                mt="s10"
              >
                Tem certeza que deseja deletar a digital?
              </Text>
              <Box gap="s16" mt="s40" mb="s14" alignItems="center">
                <Button
                  title="Sim, deletar"
                  onPress={onDelete}
                  width="80%"
                  height={50}
                />
                <Button
                  title="Cancelar"
                  onPress={onClose}
                  width="80%"
                  preset="outline"
                  height={50}
                />
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
