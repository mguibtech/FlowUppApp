import {
  Box,
  Screen,
  BarChart,
  BarData,
  ItemListTransaction,
  ItemListTransactionProps,
} from '@components';
import { QuicklyAnalysisHeader } from './Components/QuicklyAnalysisHeader';
import { FlatList } from 'react-native';

export function QuicklyAnalysisScreen() {
  const expensesData: BarData[] = [
    { week: '1ª Semana', value1: 1500, value2: 2000 },
    { week: '2ª Semana', value1: 1500, value2: 3500 },
    { week: '3ª Semana', value1: 3500, value2: 7500 },
    { week: '4ª Semana', value1: 5000, value2: 2500 },
  ];

  const transactionsData: ItemListTransactionProps[] = [
    {
      title: 'Carro',
      dateTime: '2025-10-01T00:00:00.000Z',
      category: 'transport',
      amount: 'R$ 100,00',
    },
    {
      title: 'Presente para a mãe',
      dateTime: '2025-01-01T00:00:00.000Z',
      category: 'gift',
      amount: 'R$ 100,00',
    },
    {
      title: 'Alimentação',
      dateTime: '2025-09-01T00:00:00.000Z',
      category: 'food',
      amount: 'R$ 100,00',
    },
    {
      title: 'Vestuário',
      dateTime: '2025-08-01T00:00:00.000Z',
      category: 'rent',
      amount: 'R$ 100,00',
    },
    {
      title: 'Entretenimento',
      dateTime: '2025-07-01T00:00:00.000Z',
      category: 'entertainment',
      amount: 'R$ 100,00',
    },
  ];

  return (
    <Screen canGoBack title="Análise Rápida" icon="notification">
      <QuicklyAnalysisHeader />

      <Box
        flex={1}
        backgroundColor="background"
        borderTopLeftRadius="s56"
        borderTopRightRadius="s56"
        mt="s20"
        paddingHorizontal="s24"
        paddingTop="s24"
      >
        <BarChart
          title="Despesas de Abril"
          data={expensesData}
          maxValue={15000}
          onSearchPress={() => console.log('Search pressed')}
          onCalendarPress={() => console.log('Calendar pressed')}
        />

        <FlatList
          data={transactionsData}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: { item: ItemListTransactionProps }) => (
            <ItemListTransaction
              title={item.title}
              dateTime={item.dateTime}
              category={item.category}
              amount={item.amount}
            />
          )}
        />
      </Box>
    </Screen>
  );
}
