import React, { useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback, FlatList } from 'react-native';

import { Box, Text, Button, TextInput, Icon } from '@components';
import { IconProps } from '@components';
import { DefaultCategories } from '@types';
import { mapCategoryToProps } from '../mapCategoryToProps';

export interface NewCategoryModalProps {
  readonly visible: boolean;
  readonly onClose: () => void;
  readonly onConfirm: (data: { name: string; icon: IconProps['name'] }) => void;
  readonly availableCategories?: ReadonlyArray<DefaultCategories>;
}

export function NewCategoryModal({
  visible,
  onClose,
  onConfirm,
  availableCategories = Object.keys(mapCategoryToProps) as DefaultCategories[],
}: NewCategoryModalProps) {
  const [name, setName] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<DefaultCategories | null>(null);

  const canConfirm = name.trim().length > 0 && !!selectedCategory;

  useEffect(() => {
    if (visible) {
      setName('');
      setSelectedCategory(null);
    }
  }, [visible]);

  function handleConfirm() {
    if (!canConfirm || !selectedCategory) return;

    const { icon } = mapCategoryToProps[selectedCategory];

    onConfirm({
      name: name.trim(),
      icon: icon.focused,
    });

    onClose();
  }

  const previewIconName: IconProps['name'] = selectedCategory
    ? mapCategoryToProps[selectedCategory].icon.focused
    : 'moreDefault';

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
              <Text preset="headingSmall" semibold textAlign="center">
                Nova categoria
              </Text>

              <Text
                preset="paragraphSmall"
                textAlign="center"
                marginTop="s8"
                color="primaryContrast"
              >
                Escolha um nome e um ícone para a nova categoria.
              </Text>

              <Box marginTop="s24">
                <TextInput
                  label="Nome da categoria"
                  placeholder="Ex: Academia, Pets, Estudos..."
                  value={name}
                  onChangeText={setName}
                />
              </Box>

              {/* Preview */}
              <Box marginTop="s16" alignItems="center" justifyContent="center">
                <Icon name={previewIconName} size={50} color="white" />
                <Text
                  preset="paragraphSmall"
                  marginTop="s8"
                  color="primaryContrast"
                  textAlign="center"
                >
                  {selectedCategory
                    ? 'Esse será o ícone da categoria.'
                    : 'Selecione um ícone abaixo.'}
                </Text>
              </Box>

              {/* Lista de categorias/ícones */}
              <Box marginTop="s16">
                <Text preset="paragraphSmall" semibold marginBottom="s8">
                  Ícones disponíveis
                </Text>

                <Box maxHeight={230} borderRadius="s16" overflow="hidden">
                  <FlatList
                    data={availableCategories}
                    keyExtractor={item => item}
                    numColumns={4}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                      const { icon } = mapCategoryToProps[item];
                      const isSelected = selectedCategory === item;

                      return (
                        <Box
                          width="25%"
                          height={50}
                          alignItems="center"
                          justifyContent="center"
                          marginBottom="s12"
                        >
                          <Icon
                            name={isSelected ? icon.focused : icon.unfocused}
                            size={50}
                            onPress={() => setSelectedCategory(item)}
                          />
                        </Box>
                      );
                    }}
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
