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
import { FlatList, ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type Category = {
  id: string;
  name: string;
  label: string;
  icon: IconProps['name'];
};

export function CategoriesScreen({
  navigation,
}: AppCategoryScreenProps<'CategoriesScreen'>) {
  const income = 1000;
  const expense = 500;
  const { bottom } = useSafeAreaInsets();

  const categories: Category[] = [
    { id: '1', name: 'food', label: 'Food', icon: 'foodDefault' },
    { id: '2', name: 'transport', label: 'Transport', icon: 'carDefault' },
    {
      id: '3',
      name: 'entertainment',
      label: 'Entertainment',
      icon: 'giftDefault',
    },
    { id: '4', name: 'other', label: 'Other', icon: 'medicineDefault' },
    { id: '5', name: 'food', label: 'Food', icon: 'foodDefault' },
    { id: '6', name: 'transport', label: 'Transport', icon: 'carDefault' },
    {
      id: '7',
      name: 'entertainment',
      label: 'Entertainment',
      icon: 'giftDefault',
    },
    { id: '8', name: 'other', label: 'Other', icon: 'medicineDefault' },
    { id: '9', name: 'more', label: 'More', icon: 'moreDefault' },
  ];

  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      mb="s36"
      onPress={() => {
        if (item.name !== 'more') {
          navigation.navigate('ListItemsCategoryScreen', { category: item });
        } else {
          navigation.navigate('AddNewCategoryScreen');
        }
      }}
    >
      <Icon name={item.icon} size={90} color="white" />
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
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={renderCategoryItem}
          keyExtractor={(item: Category) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: bottom + 20, marginTop: 12 }}
        />
      </BodyBox>
    </Screen>
  );
}
