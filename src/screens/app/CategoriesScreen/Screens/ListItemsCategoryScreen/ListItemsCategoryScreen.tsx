import {
  BodyBox,
  Box,
  Button,
  ExpensePercentageBar,
  ItemListTransaction,
  Screen,
  Text,
} from '@components';
import { AppCategoryScreenProps } from '@routes';
import { mockTransactions } from '@screens';
import { CategoryType, Transaction } from '@types';
import { formatCurrency } from '@utils';
import { SectionList } from 'react-native';
import { useAppSafeArea } from '@hooks';
import { useEffect, useMemo, useState } from 'react';

type TransactionSection = {
  title: string; // Ex: 'April', 'March'
  data: Transaction[];
};

export function ListItemsCategoryScreen({
  route,
  navigation,
}: AppCategoryScreenProps<'ListItemsCategoryScreen'>) {
  const income = 5000;
  const expense = 320;
  const { category } = route.params;
  const { bottom } = useAppSafeArea();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const filtered = mockTransactions.filter(
      transaction => transaction.category === category.name,
    );

    setTransactions(filtered);
  }, [category]);

  const sections = useMemo<TransactionSection[]>(() => {
    // agrupa por mês/ano
    const grouped: Record<string, Transaction[]> = {};

    transactions.forEach(transaction => {
      const date = new Date(transaction.dateTime);

      // título da section (ex: "April", "March 2023" se quiser incluir ano)
      const monthLabel = date.toLocaleDateString('en-US', {
        month: 'long',
        // year: 'numeric', // descomente se quiser "April 2023"
      });

      if (!grouped[monthLabel]) {
        grouped[monthLabel] = [];
      }

      grouped[monthLabel].push(transaction);
    });

    // transforma objeto em array de sections e ordena por data (mais recente primeiro)
    const sectionsArray: TransactionSection[] = Object.entries(grouped).map(
      ([title, data]) => {
        // ordena as transações dentro do mês (opcional, do mais recente pro mais antigo)
        const sortedData = [...data].sort(
          (a, b) =>
            new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
        );

        return { title, data: sortedData };
      },
    );

    // ordena os meses (mais recente primeiro)
    sectionsArray.sort((a, b) => {
      const dateA = new Date(a.data[0].dateTime).getTime();
      const dateB = new Date(b.data[0].dateTime).getTime();
      return dateB - dateA;
    });

    return sectionsArray;
  }, [transactions]);

  function handleNewTransaction() {
    navigation.navigate('NewTransactionScreen');
  }

  return (
    <Screen canGoBack title={category.label} icon="notification">
      <Box marginHorizontal="s32" mt="s16">
        <ExpensePercentageBar income={income} expense={expense} />
      </Box>
      <BodyBox>
        <SectionList
          sections={sections}
          renderItem={({ item }) => (
            <ItemListTransaction
              title={item.title}
              amount={formatCurrency(item.amount)}
              category={item.category as CategoryType}
              dateTime={item.dateTime}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text preset="paragraphMedium" semibold marginTop="s16">
              {title}
            </Text>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: bottom + 20, marginTop: 12 }}
        />
        <Box alignItems="center" justifyContent="center" mt="s10" mb="s24">
          <Button
            title="Nova transação"
            onPress={handleNewTransaction}
            width="60%"
          />
        </Box>
      </BodyBox>
    </Screen>
  );
}
