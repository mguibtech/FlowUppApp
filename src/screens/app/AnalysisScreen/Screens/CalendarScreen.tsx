import React, { useState, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
  BodyBox,
  Box,
  Screen,
  Text,
  TouchableOpacityBox,
  Icon,
  ItemListTransaction,
  SemiCircularChart,
  Button,
} from '@components';
import type { CategoryData } from '@components';
import { Transaction } from '@types';
import { useAppTheme } from '@hooks';
import { useAnalysisContext } from '../Context';
import { formatCurrency } from '@utils';
import { AppAnalysisScreenProps } from '@routes';

type ViewType = 'spends' | 'categories';

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

// Configure Portuguese locale
LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt';

export function CalendarScreen({}: AppAnalysisScreenProps<'CalendarScreen'>) {
  const { colors } = useAppTheme();
  const { transactions, categories, getTransactionsByDateRange } =
    useAnalysisContext();
  const [selectedView, setSelectedView] = useState<ViewType>('categories');
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Extract unique years and months from transactions
  const availablePeriods = useMemo(() => {
    const periods = new Map<number, Set<number>>(); // year -> months set

    transactions.forEach(transaction => {
      const date = new Date(transaction.dateTime);
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-indexed

      if (!periods.has(year)) {
        periods.set(year, new Set());
      }
      periods.get(year)!.add(month);
    });

    // Convert to arrays and sort
    const years = Array.from(periods.keys()).sort((a, b) => b - a); // Descending
    const monthsByYear = new Map<number, number[]>();

    periods.forEach((monthsSet, year) => {
      monthsByYear.set(
        year,
        Array.from(monthsSet).sort((a, b) => a - b),
      );
    });

    return { years, monthsByYear };
  }, [transactions]);

  // Initialize selected year and month with first available period
  const [selectedYear, setSelectedYear] = useState(() => {
    const periods = new Map<number, Set<number>>();
    transactions.forEach(transaction => {
      const date = new Date(transaction.dateTime);
      const year = date.getFullYear();
      const month = date.getMonth();
      if (!periods.has(year)) {
        periods.set(year, new Set());
      }
      periods.get(year)!.add(month);
    });
    const years = Array.from(periods.keys()).sort((a, b) => b - a);
    return years.length > 0 ? years[0] : new Date().getFullYear();
  });

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const periods = new Map<number, Set<number>>();
    transactions.forEach(transaction => {
      const date = new Date(transaction.dateTime);
      const year = date.getFullYear();
      const month = date.getMonth();
      if (!periods.has(year)) {
        periods.set(year, new Set());
      }
      periods.get(year)!.add(month);
    });
    const years = Array.from(periods.keys()).sort((a, b) => b - a);
    const firstYear = years.length > 0 ? years[0] : new Date().getFullYear();
    const firstYearMonths = periods.get(firstYear);
    return firstYearMonths && firstYearMonths.size > 0
      ? Array.from(firstYearMonths).sort((a, b) => a - b)[0]
      : 0;
  });

  // Get available months for selected year
  const availableMonths = useMemo(() => {
    const months = availablePeriods.monthsByYear.get(selectedYear) || [];
    return months.map(monthIndex => ({
      index: monthIndex,
      name: MONTHS[monthIndex],
    }));
  }, [selectedYear, availablePeriods]);

  // Update selected month when year changes
  React.useEffect(() => {
    const months = availablePeriods.monthsByYear.get(selectedYear);
    if (months && months.length > 0) {
      // If current month is not available in new year, select first available
      if (!months.includes(selectedMonth)) {
        setSelectedMonth(months[0]);
      }
    }
  }, [selectedYear, availablePeriods, selectedMonth]);

  // Format date for Calendar component (YYYY-MM-DD)
  // Use useMemo to recalculate when selectedMonth or selectedYear changes
  const currentDate = React.useMemo(
    () => `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-01`,
    [selectedMonth, selectedYear],
  );

  // Function to handle search/filter
  const handleSearch = () => {
    const startDate = new Date(selectedYear, selectedMonth, 1);
    const endDate = new Date(selectedYear, selectedMonth + 1, 0, 23, 59, 59);
    const filtered = getTransactionsByDateRange(startDate, endDate);
    setFilteredTransactions(filtered);
    setHasSearched(true);
  };

  // Format transactions for display
  const formattedTransactions = useMemo(() => {
    return filteredTransactions.map(transaction => ({
      ...transaction,
      amount: transaction.isExpense
        ? `-${formatCurrency(transaction.amount)}`
        : formatCurrency(transaction.amount),
    }));
  }, [filteredTransactions]);

  // Use categories from context or default empty array
  const categoriesData: CategoryData[] = useMemo(() => {
    if (categories.length > 0) {
      return categories;
    }
    // Default empty categories if none provided
    return [];
  }, [categories]);

  return (
    <Screen canGoBack title="Calendário" icon="notification">
      <BodyBox>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScrollBeginDrag={() => {
            setShowMonthPicker(false);
            setShowYearPicker(false);
          }}
        >
          {/* Calendar Section */}
          <Box marginHorizontal="s24">
            {/* Month and Year Selectors */}
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="s12"
              borderRadius="s12"
              gap="s8"
            >
              {/* Month Dropdown */}
              <Box
                position="relative"
                flex={1}
                backgroundColor="greenLight"
                borderRadius="s8"
                paddingHorizontal="s12"
                paddingVertical="s8"
              >
                <TouchableOpacityBox
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap="s4"
                  onPress={() => {
                    setShowMonthPicker(!showMonthPicker);
                    setShowYearPicker(false);
                  }}
                >
                  <Box flex={1} minWidth={0}>
                    <Text
                      color="primary"
                      preset="paragraphMedium"
                      semibold
                      numberOfLines={1}
                    >
                      {MONTHS[selectedMonth]}
                    </Text>
                  </Box>
                  <Icon
                    name={showMonthPicker ? 'arrowUp' : 'arrowDown'}
                    color="primary"
                    size={16}
                  />
                </TouchableOpacityBox>
                {showMonthPicker && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={0}
                    right={0}
                    mt="s4"
                    backgroundColor="white"
                    borderRadius="s12"
                    padding="s8"
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      zIndex: 1000,
                      maxHeight: 200,
                    }}
                  >
                    <ScrollView
                      nestedScrollEnabled
                      showsVerticalScrollIndicator={false}
                      style={{ maxHeight: 200 }}
                    >
                      {availableMonths.length > 0 ? (
                        availableMonths.map(({ index, name }) => (
                          <TouchableOpacityBox
                            key={`month-${index}-${selectedYear}`}
                            paddingVertical="s8"
                            paddingHorizontal="s12"
                            backgroundColor={
                              selectedMonth === index ? 'successLight' : 'white'
                            }
                            borderRadius="s8"
                            mb="s4"
                            onPress={() => {
                              setSelectedMonth(index);
                              setShowMonthPicker(false);
                            }}
                          >
                            <Text
                              color={
                                selectedMonth === index
                                  ? 'primary'
                                  : 'backgroundContrast'
                              }
                              preset="paragraphMedium"
                              semibold={selectedMonth === index}
                            >
                              {name}
                            </Text>
                          </TouchableOpacityBox>
                        ))
                      ) : (
                        <Box paddingVertical="s8" paddingHorizontal="s12">
                          <Text
                            color="backgroundContrast"
                            preset="paragraphSmall"
                          >
                            Nenhum mês disponível
                          </Text>
                        </Box>
                      )}
                    </ScrollView>
                  </Box>
                )}
              </Box>
              {/* Year Dropdown */}
              <Box
                position="relative"
                flex={1}
                backgroundColor="greenLight"
                borderRadius="s8"
                paddingHorizontal="s12"
                paddingVertical="s8"
              >
                <TouchableOpacityBox
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap="s4"
                  onPress={() => {
                    setShowYearPicker(!showYearPicker);
                    setShowMonthPicker(false);
                  }}
                >
                  <Box flex={1} minWidth={0}>
                    <Text
                      color="primary"
                      preset="paragraphMedium"
                      semibold
                      numberOfLines={1}
                    >
                      {selectedYear}
                    </Text>
                  </Box>
                  <Icon
                    name={showYearPicker ? 'arrowUp' : 'arrowDown'}
                    color="primary"
                    size={16}
                  />
                </TouchableOpacityBox>
                {showYearPicker && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={0}
                    right={0}
                    mt="s4"
                    backgroundColor="white"
                    borderRadius="s12"
                    padding="s8"
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      zIndex: 1000,
                      maxHeight: 200,
                    }}
                  >
                    <ScrollView
                      nestedScrollEnabled
                      showsVerticalScrollIndicator={false}
                      style={{ maxHeight: 200 }}
                    >
                      {availablePeriods.years.length > 0 ? (
                        availablePeriods.years.map(year => (
                          <TouchableOpacityBox
                            key={`year-${year}`}
                            paddingVertical="s8"
                            paddingHorizontal="s12"
                            backgroundColor={
                              selectedYear === year ? 'successLight' : 'white'
                            }
                            borderRadius="s8"
                            mb="s4"
                            onPress={() => {
                              setSelectedYear(year);
                              setShowYearPicker(false);
                            }}
                          >
                            <Text
                              color={
                                selectedYear === year
                                  ? 'primary'
                                  : 'backgroundContrast'
                              }
                              preset="paragraphMedium"
                              semibold={selectedYear === year}
                            >
                              {year}
                            </Text>
                          </TouchableOpacityBox>
                        ))
                      ) : (
                        <Box paddingVertical="s8" paddingHorizontal="s12">
                          <Text
                            color="backgroundContrast"
                            preset="paragraphSmall"
                          >
                            Nenhum ano disponível
                          </Text>
                        </Box>
                      )}
                    </ScrollView>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Calendar */}
            <Calendar
              key={currentDate}
              current={currentDate}
              onMonthChange={month => {
                setSelectedMonth(month.month - 1);
                setSelectedYear(month.year);
              }}
              enableSwipeMonths={false}
              hideArrows
              renderHeader={() => null}
              theme={{
                backgroundColor: 'transparent',
                calendarBackground: 'transparent',
                textSectionTitleColor: colors.blueVivid,
                selectedDayBackgroundColor: colors.primary,
                selectedDayTextColor: '#ffffff',
                todayTextColor: colors.primary,
                dayTextColor: colors.backgroundContrast,
                textDisabledColor: '#d9e1e8',
                dotColor: colors.primary,
                selectedDotColor: '#ffffff',
                arrowColor: colors.primary,
                monthTextColor: colors.primary,
                textDayFontWeight: '400',
                textMonthFontWeight: '600',
                textDayHeaderFontWeight: '400',
                textDayFontSize: 14,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 12,
              }}
              style={{
                paddingLeft: 0,
                paddingRight: 0,
              }}
            />
          </Box>

          {/* Search Button */}
          <Box marginHorizontal="s24" marginTop="s24" alignItems="center">
            <Button title="Buscar" width="50%" onPress={handleSearch} />
          </Box>

          {/* Spends/Categories Toggle Buttons */}
          <Box
            flexDirection="row"
            gap="s12"
            marginHorizontal="s24"
            marginTop="s24"
          >
            <TouchableOpacityBox
              flex={1}
              backgroundColor={
                selectedView === 'spends' ? 'primary' : 'greenLight'
              }
              borderRadius="s28"
              paddingVertical="s12"
              alignItems="center"
              onPress={() => setSelectedView('spends')}
            >
              <Text
                color={
                  selectedView === 'spends' ? 'white' : 'backgroundContrast'
                }
                preset="paragraphMedium"
                semibold
              >
                Spends
              </Text>
            </TouchableOpacityBox>

            <TouchableOpacityBox
              flex={1}
              backgroundColor={
                selectedView === 'categories' ? 'primary' : 'greenLight'
              }
              borderRadius="s28"
              paddingVertical="s12"
              alignItems="center"
              onPress={() => setSelectedView('categories')}
            >
              <Text
                color={
                  selectedView === 'categories' ? 'white' : 'backgroundContrast'
                }
                preset="paragraphMedium"
                semibold
              >
                Categories
              </Text>
            </TouchableOpacityBox>
          </Box>

          {/* Content based on selected view */}
          {!hasSearched ? (
            <Box alignItems="center" paddingVertical="s24">
              <Text color="backgroundContrast" preset="paragraphMedium">
                Selecione um período e clique em "Buscar" para ver os dados
              </Text>
            </Box>
          ) : selectedView === 'spends' ? (
            /* Transactions List */
            <Box>
              {formattedTransactions.length > 0 ? (
                formattedTransactions.map(transaction => (
                  <ItemListTransaction
                    key={transaction.id}
                    title={transaction.title}
                    dateTime={transaction.dateTime}
                    category={transaction.category}
                    amount={transaction.amount}
                    isExpense={transaction.isExpense}
                  />
                ))
              ) : (
                <Box alignItems="center" paddingVertical="s24">
                  <Text color="backgroundContrast" preset="paragraphMedium">
                    Nenhuma transação encontrada para este período
                  </Text>
                </Box>
              )}
            </Box>
          ) : (
            /* Categories Chart */
            <Box>
              {categoriesData.length > 0 ? (
                <SemiCircularChart data={categoriesData} size={300} />
              ) : (
                <Box alignItems="center" paddingVertical="s24">
                  <Text color="backgroundContrast" preset="paragraphMedium">
                    Nenhuma categoria encontrada
                  </Text>
                </Box>
              )}
            </Box>
          )}
        </ScrollView>
      </BodyBox>
    </Screen>
  );
}
