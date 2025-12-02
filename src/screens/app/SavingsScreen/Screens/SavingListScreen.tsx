import {
  BodyBox,
  Box,
  Button,
  CircularProgressIcon,
  ExpensePercentageBar,
  Icon,
  ItemListTransaction,
  Screen,
  Text,
} from '@components';
import { useAppSafeArea } from '@hooks';
import { AppCategoryScreenProps } from '@routes';
import { mockTransactions, TransactionSection } from '@screens';
import { Transaction } from '@types';
import { formatCurrency } from '@utils';
import { useEffect, useMemo, useState } from 'react';
import { SectionList } from 'react-native';

export function SavingsListScreen({
  route,
}: AppCategoryScreenProps<'SavingsListScreen'>) {
  const { category } = route.params;
  const income = 100;
  const expense = 20;
  const { bottom } = useAppSafeArea();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const filtered = mockTransactions.filter(
      transaction => transaction.category === category.label,
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

  return (
    <Screen canGoBack title={category.label} icon="notification">
      <BodyBox flex={1}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="s32"
          mt="s32"
        >
          <Box>
            <Box>
              <Box flexDirection="row" alignItems="center" gap="s4">
                <Icon name="income" size={12} />
                <Text>Meta</Text>
              </Box>
              <Text preset="headingSmall">R$ 100,00</Text>
            </Box>
            <Box>
              <Box flexDirection="row" alignItems="center" gap="s4">
                <Icon name="income" size={12} />
                <Text>Valor guardado</Text>
              </Box>
              <Text preset="headingSmall">R$ 100,00</Text>
            </Box>
          </Box>
          <Box
            backgroundColor="blueLight"
            alignItems="center"
            justifyContent="center"
            gap="s4"
            paddingHorizontal="s40"
            paddingVertical="s20"
            borderRadius="s44"
          >
            <Box
              borderWidth={2}
              borderColor="white"
              padding="s8"
              borderRadius="s16"
            >
              <Icon name={category.icon.focused} size={32} color="white" />
            </Box>
            <Text color="white">Meta</Text>
          </Box>
        </Box>
        <Box>
          <ExpensePercentageBar
            colorBarPercentage="primary"
            showValuesIncome={false}
            income={income}
            expense={expense}
          />
        </Box>

        <SectionList
          sections={sections}
          renderItem={({ item }) => (
            <ItemListTransaction
              title={item.title}
              amount={formatCurrency(item.amount)}
              category={item.category}
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
          contentContainerStyle={{
            paddingBottom: bottom + 20,
            marginTop: 12,
            flexGrow: sections.length === 0 ? 1 : 0,
          }}
          ListEmptyComponent={() => (
            <Box
              flex={1}
              alignItems="center"
              justifyContent="center"
              paddingHorizontal="s24"
            >
              <Icon name="category" size={72} color="primary" />

              <Text
                preset="headingSmall"
                semibold
                marginTop="s16"
                textAlign="center"
                color="primaryContrast"
              >
                Nenhuma transação por aqui ainda
              </Text>

              <Text
                preset="paragraphSmall"
                marginTop="s8"
                marginBottom="s24"
                textAlign="center"
                color="primaryContrast"
              >
                Comece adicionando uma nova transação para acompanhar seus
                gastos dessa categoria.
              </Text>
            </Box>
          )}
        />

        <Box alignItems="center" justifyContent="center" mt="s10" mb="s20">
          <Button title="Nova transação" onPress={() => {}} width="60%" />
        </Box>
      </BodyBox>
    </Screen>
  );
}
