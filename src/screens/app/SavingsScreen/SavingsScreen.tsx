import {
  BodyBox,
  Box,
  ExpensePercentageBar,
  Icon,
  IconProps,
  Screen,
  Button,
  Text,
  TouchableOpacityBox,
} from '@components';
import { Category } from '@screens';
import { AppCategoryScreenProps } from '@routes';
import { mapCategoryToProps } from '../CategoriesScreen/Components/mapCategoryToProps';
import { DefaultCategories, DefaultSavings } from '@types';
import { FlatList, ListRenderItem } from 'react-native';
import { NewSavingCategoryModal } from './Components/NewSavingCategoryModal/NewSavingCategoryModal';
import { useState } from 'react';

export function SavingsScreen({
  navigation,
}: AppCategoryScreenProps<'SavingsScreen'>) {
  const income = 1000;
  const expense = 500;
  const savingsCategories: Category[] = [
    {
      id: 'transport',
      label: 'Transporte',
      value: 'transport',
      icon: { unfocused: 'transportDefault', focused: 'transportPressed' },
    },
    {
      id: 'entertainment',
      label: 'Entretenimento',
      value: 'entertainment',
      icon: {
        unfocused: 'entertainmentDefault',
        focused: 'entertainmentPressed',
      },
    },
    {
      id: 'groceries',
      label: 'Mercado',
      value: 'groceries',
      icon: { unfocused: 'groceriesDefault', focused: 'groceriesPressed' },
    },
    {
      id: 'gift',
      label: 'Presentes',
      value: 'gift',
      icon: { unfocused: 'giftDefault', focused: 'giftPressed' },
    },
    {
      id: 'saving',
      label: 'Economias',
      value: 'saving',
      icon: { unfocused: 'savingDefault', focused: 'savingPressed' },
    },
    {
      id: 'medicine',
      label: 'Saúde',
      value: 'medicine',
      icon: { unfocused: 'medicineDefault', focused: 'medicinePressed' },
    },
  ];

  const [newSavingCategoryModalVisible, setNewSavingCategoryModalVisible] =
    useState(false);

  function handleNewSavingCategory() {
    setNewSavingCategoryModalVisible(true);
  }

  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      marginBottom="s12"
      onPress={() => {
        navigation.navigate('SavingsListScreen', { category: item });
      }}
    >
      <Icon name={item.icon.unfocused} size={90} color="white" />
      <Text preset="paragraphMedium" semibold>
        {item.label}
      </Text>
    </TouchableOpacityBox>
  );
  return (
    <Screen canGoBack title="Savings" icon="notification">
      <Box marginHorizontal="s32" mt="s16">
        <ExpensePercentageBar income={income} expense={expense} />
      </Box>
      <BodyBox flex={1} mt="s16">
        <FlatList
          data={savingsCategories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.value}
          contentContainerStyle={{ paddingBottom: 16 }}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginTop: 16,
          }}
          ListFooterComponent={() => (
            <Box alignItems="center">
              <Button
                title="Adicionar"
                onPress={handleNewSavingCategory}
                width="50%"
                mt="s56"
              />
            </Box>
          )}
        />
      </BodyBox>

      <NewSavingCategoryModal
        visible={newSavingCategoryModalVisible}
        onClose={() => setNewSavingCategoryModalVisible(false)}
        onConfirm={data => {
          console.log(data);
        }}
      />
    </Screen>
  );
}
