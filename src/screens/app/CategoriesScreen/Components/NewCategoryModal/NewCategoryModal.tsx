import React, { useEffect, useState } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList, // 👈 novo
} from 'react-native';

import {
  Box,
  Text,
  Button,
  TextInput,
  Icon,
  TouchableOpacityBox,
} from '@components';
import { IconProps } from '@components';
import { categoryIconName } from '@types';

export interface NewCategoryModalProps {
  readonly visible: boolean;
  readonly onClose: () => void;
  readonly onConfirm: (data: { name: string; icon: IconProps['name'] }) => void;
  readonly availableIcons?: ReadonlyArray<IconProps['name']>;
}

export function NewCategoryModal({
  visible,
  onClose,
  onConfirm,
  availableIcons = Object.values(categoryIconName),
}: NewCategoryModalProps) {
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconProps['name'] | null>(
    null,
  );

  const canConfirm = name.trim().length > 0 && !!selectedIcon;

  useEffect(() => {
    if (visible) {
      setName('');
      setSelectedIcon(null);
    }
  }, [visible]);

  function handleConfirm() {
    if (!canConfirm || !selectedIcon) return;
    onConfirm({ name: name.trim(), icon: selectedIcon });
    onClose();
  }

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
              {/* Título */}
              <Text preset="headingSmall" semibold textAlign="center">
                Nova categoria
              </Text>

              {/* Subtítulo */}
              <Text
                preset="paragraphSmall"
                textAlign="center"
                marginTop="s8"
                color="primaryContrast"
              >
                Escolha um nome e um ícone para a nova categoria.
              </Text>

              {/* Input de nome */}
              <Box marginTop="s24">
                <TextInput
                  label="Nome da categoria"
                  placeholder="Ex: Academia, Pets, Estudos..."
                  value={name}
                  onChangeText={setName}
                />
              </Box>

              {/* Preview do ícone selecionado */}
              <Box marginTop="s16" alignItems="center" justifyContent="center">
                {selectedIcon ? (
                  <Icon name={selectedIcon} size={50} color="white" />
                ) : (
                  <Icon name="moreDefault" size={50} />
                )}

                <Text
                  preset="paragraphSmall"
                  marginTop="s8"
                  color="primaryContrast"
                  textAlign="center"
                >
                  {selectedIcon
                    ? 'Esse será o ícone da categoria.'
                    : 'Selecione um ícone abaixo.'}
                </Text>
              </Box>

              {/* Seleção de ícones */}
              <Box marginTop="s16">
                <Text preset="paragraphSmall" semibold marginBottom="s8">
                  Ícones disponíveis
                </Text>

                <Box
                  maxHeight={230} // 👈 limita a altura da área de ícones
                  borderRadius="s16"
                  overflow="hidden"
                >
                  <FlatList
                    keyExtractor={item => item}
                    numColumns={4}
                    data={availableIcons}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <Box
                        key={item}
                        width="25%"
                        height={50}
                        alignItems="center"
                        justifyContent="center"
                        marginBottom="s12"
                      >
                        <Icon
                          name={item}
                          size={50}
                          onPress={() => setSelectedIcon(item)}
                          color={
                            selectedIcon === item
                              ? 'greenLight'
                              : 'primaryContrast'
                          }
                        />
                      </Box>
                    )}
                  />
                </Box>
              </Box>

              {/* Botões */}
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginTop="s24"
              >
                <Button
                  title="Cancelar"
                  preset="outline"
                  width="48%"
                  onPress={onClose}
                />
                <Button
                  title="Salvar"
                  width="48%"
                  onPress={handleConfirm}
                  disabled={!canConfirm}
                />
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
