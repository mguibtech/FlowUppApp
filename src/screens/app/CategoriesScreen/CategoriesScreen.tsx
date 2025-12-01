import {
  BodyBox,
  Box,
  ExpensePercentageBar,
  Icon,
  IconProps,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import { AppCategoryScreenProps } from '@routes';
import { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NewCategoryModal } from './Components/NewCategoryModal/NewCategoryModal';
import { mapCategoryToProps } from './Components/mapCategoryToProps';

export type Category = {
  id: string;
  label: string;
  icon: {
    focused: IconProps['name'];
    unfocused: IconProps['name'];
  };
};

export function CategoriesScreen({
  navigation,
}: AppCategoryScreenProps<'CategoriesScreen'>) {
  const income = 1000;
  const expense = 500;
  const { bottom } = useSafeAreaInsets();

  const [newCategoryModalVisible, setNewCategoryModalVisible] = useState(false);
  const categories = Object.values(mapCategoryToProps) as Category[];

  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      marginBottom="s12"
      onPress={() => {
        if (item.label !== 'Mais') {
          navigation.navigate('ListItemsCategoryScreen', { category: item });
        } else {
          setNewCategoryModalVisible(true);
        }
      }}
    >
      <Icon name={item.icon.unfocused} size={90} color="white" />
      <Text preset="paragraphMedium" semibold>
        {item.label}
      </Text>
    </TouchableOpacityBox>
  );

  return (
    <Screen canGoBack title="Categories" icon="notification">
      <Box marginHorizontal="s32" mt="s16">
        <ExpensePercentageBar income={income} expense={expense} />
      </Box>
      <BodyBox flex={1}>
        <FlatList
          data={categories}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between', gap: 12 }}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => `${item.label}-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: bottom + 20, marginTop: 12 }}
          ListEmptyComponent={() => (
            <Box flex={1} alignItems="center" justifyContent="center" mt="s32">
              <Text preset="paragraphMedium" color="primaryContrast" semibold>
                Lista vazia
              </Text>
            </Box>
          )}
        />
      </BodyBox>
      <NewCategoryModal
        visible={newCategoryModalVisible}
        onClose={() => setNewCategoryModalVisible(false)}
        onConfirm={data => {
          console.log(data);
        }}
      />
    </Screen>
  );
}
