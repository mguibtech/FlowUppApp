import { useState, useMemo } from 'react';

import {
  BodyBox,
  Box,
  Button,
  DateInput,
  ItemListTransaction,
  Option,
  RadioGroup,
  Screen,
  SelectInput,
  Text,
  TextInput,
} from '@components';
import { CategoryType } from '@types';
import { useAnalysisContext } from '../Context';
import { FlatList } from 'react-native';
import { formatCurrency, formatDate } from '@utils';
import { theme } from '@theme';
import { useAppSafeArea } from '@hooks';

type ReportType = 'income' | 'expense';

export function SearchScreen() {
  const { transactions, getTransactionsByType } = useAnalysisContext();
  const { bottom } = useAppSafeArea();
  const [reportType, setReportType] = useState<ReportType | null>('expense');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [searchText, setSearchText] = useState('');
  const [dateError, setDateError] = useState<string | undefined>(undefined);

  // Calculate bottom padding for FlatList to account for tab bar
  // Tab bar height: ~12px (paddingTop) + ~32px (icon) + ~8px (mb) + bottom safe area
  const tabBarHeight = 12 + 8 + bottom;
  const flatListBottomPadding = tabBarHeight + theme.spacing.s24;

  // Calculate available date range from transactions
  const { minDate, maxDate, availableDates } = useMemo(() => {
    if (transactions.length === 0) {
      return {
        minDate: undefined,
        maxDate: undefined,
        availableDates: new Set<string>(),
      };
    }

    const dates = transactions.map(t => new Date(t.dateTime));
    const min = new Date(Math.min(...dates.map(d => d.getTime())));
    const max = new Date(Math.max(...dates.map(d => d.getTime())));

    // Create a set of available dates (YYYY-MM-DD format)
    const availableDatesSet = new Set<string>();
    for (const transaction of transactions) {
      const date = new Date(transaction.dateTime);
      const dateStr = `${date.getFullYear()}-${String(
        date.getMonth() + 1,
      ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      availableDatesSet.add(dateStr);
    }

    return {
      minDate: min,
      maxDate: max,
      availableDates: availableDatesSet,
    };
  }, [transactions]);

  // Validate selected date
  const handleDateChange = (date: Date) => {
    // Always set the date first to ensure it's preserved
    setSelectedDate(date);

    const dateStr = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    if (availableDates.has(dateStr)) {
      setDateError(undefined);
    } else {
      // Find the closest available date
      const dateTime = date.getTime();
      let closestDate: Date | null = null;
      let minDiff = Infinity;

      for (const transaction of transactions) {
        const transactionDate = new Date(transaction.dateTime);
        const diff = Math.abs(transactionDate.getTime() - dateTime);
        if (diff < minDiff) {
          minDiff = diff;
          closestDate = transactionDate;
        }
      }

      if (closestDate) {
        setDateError(
          `Não há transações nesta data. Data mais próxima: ${formatDate(
            closestDate,
            'dd/MM/yyyy',
          )}`,
        );
      } else {
        setDateError('Não há transações nesta data');
      }
    }
  };
  const categoryLabels: Record<CategoryType, string> = {
    wedding: 'Casamento',
    car: 'Carro',
    newHome: 'Casa Nova',
    travel: 'Viagem',
    more: 'Mais',
    saving: 'Poupança',
    entertainment: 'Entretenimento',
    food: 'Comida',
    medicine: 'Medicina',
    gift: 'Presente',
    rent: 'Aluguel',
    groceries: 'Mercado',
    transport: 'Transporte',
    salary: 'Salário',
  };

  const categoryOptions: ReadonlyArray<Option<CategoryType>> = [
    { label: categoryLabels.wedding, value: 'wedding' },
    { label: categoryLabels.car, value: 'car' },
    { label: categoryLabels.newHome, value: 'newHome' },
    { label: categoryLabels.travel, value: 'travel' },
    { label: categoryLabels.more, value: 'more' },
    { label: categoryLabels.saving, value: 'saving' },
    { label: categoryLabels.entertainment, value: 'entertainment' },
    { label: categoryLabels.food, value: 'food' },
    { label: categoryLabels.medicine, value: 'medicine' },
    { label: categoryLabels.gift, value: 'gift' },
    { label: categoryLabels.rent, value: 'rent' },
    { label: categoryLabels.groceries, value: 'groceries' },
    { label: categoryLabels.transport, value: 'transport' },
    { label: categoryLabels.salary, value: 'salary' },
  ] as const;

  // Filter transactions based on search criteria
  const filteredTransactions = useMemo(() => {
    let filtered = [...transactions];

    // Filter by report type (income/expense)
    if (reportType) {
      filtered = getTransactionsByType(reportType === 'expense');
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        transaction => transaction.category === selectedCategory,
      );
    }

    // Filter by date
    if (selectedDate) {
      const startDate = new Date(selectedDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(selectedDate);
      endDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter(transaction => {
        const transactionDate = new Date(transaction.dateTime);
        return transactionDate >= startDate && transactionDate <= endDate;
      });
    }

    // Filter by search text
    if (searchText.trim()) {
      const searchLower = searchText.toLowerCase().trim();
      filtered = filtered.filter(transaction =>
        transaction.title.toLowerCase().includes(searchLower),
      );
    }

    return filtered;
  }, [
    transactions,
    reportType,
    selectedCategory,
    selectedDate,
    searchText,
    getTransactionsByType,
  ]);

  // Check if any filters are active
  const hasActiveFilters = useMemo(() => {
    return (
      searchText.trim() !== '' ||
      selectedCategory !== null ||
      selectedDate !== null ||
      reportType !== null
    );
  }, [searchText, selectedCategory, selectedDate, reportType]);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchText('');
    setSelectedCategory(null);
    setSelectedDate(null);
    setReportType(null);
    setDateError(undefined);
  };

  return (
    <Screen canGoBack title="Buscar" icon="notification">
      <TextInput
        placeholder="Buscar..."
        boxProps={{ marginHorizontal: 's32' }}
        value={searchText}
        onChangeText={setSearchText}
      />

      <BodyBox>
        <SelectInput
          label="Categorias"
          items={categoryOptions}
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />
        <DateInput
          label="Data"
          value={selectedDate}
          onChange={handleDateChange}
          minimumDate={minDate}
          maximumDate={maxDate}
          errorMessage={dateError}
        />
        <Box mt="s36" flex={1}>
          <Text>Relatório</Text>
          <RadioGroup
            options={[
              { label: 'Receita', value: 'income' },
              { label: 'Despesa', value: 'expense' },
            ]}
            value={reportType}
            onValueChange={setReportType}
          />
          {hasActiveFilters && (
            <Box justifyContent="center" alignItems="center">
              <Button
                mt="s24"
                title="Limpar filtros"
                width={'50%'}
                onPress={handleClearFilters}
              />
            </Box>
          )}
          <FlatList
            data={filteredTransactions}
            renderItem={({ item }) => (
              <ItemListTransaction
                title={item.title}
                dateTime={item.dateTime}
                category={item.category}
                amount={formatCurrency(item.amount)}
                isExpense={item.isExpense}
              />
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={
              <Box alignItems="center" paddingVertical="s24" mt="s24" mb="s24">
                <Text color="backgroundContrast" preset="paragraphMedium">
                  Nenhuma transação encontrada
                </Text>
              </Box>
            }
            style={{ marginTop: theme.spacing.s16, flex: 1 }}
            contentContainerStyle={{ paddingBottom: flatListBottomPadding }}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </BodyBox>
    </Screen>
  );
}
