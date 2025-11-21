import React, { useState } from 'react';
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
} from '@components';
import type { CategoryData } from '@components';
import { CategoryType } from '@types';
import { useAppTheme } from '@hooks';

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

export function CalendarScreen() {
  const { colors } = useAppTheme();
  const [selectedMonth, setSelectedMonth] = useState(3); // April (0-indexed)
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedView, setSelectedView] = useState<ViewType>('categories');
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  // Generate years from 2000 to current year
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, i) => 2000 + i,
  ).reverse();

  // Format date for Calendar component (YYYY-MM-DD)
  // Use useMemo to recalculate when selectedMonth or selectedYear changes
  const currentDate = React.useMemo(
    () => `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-01`,
    [selectedMonth, selectedYear],
  );

  // Mock transactions data
  const transactions = [
    {
      id: '1',
      title: 'Groceries',
      dateTime: '2023-04-24T17:00:00',
      category: 'groceries' as CategoryType,
      amount: '-$100,00',
      isExpense: true,
    },
    {
      id: '2',
      title: 'Transport',
      dateTime: '2023-04-24T17:00:00',
      category: 'transport' as CategoryType,
      amount: '$50,00',
      isExpense: true,
    },
    {
      id: '3',
      title: 'Food',
      dateTime: '2023-04-24T18:00:00',
      category: 'food' as CategoryType,
      amount: '$80,00',
      isExpense: true,
    },
    {
      id: '4',
      title: 'Entertainment',
      dateTime: '2023-04-24T19:00:00',
      category: 'entertainment' as CategoryType,
      amount: '$120,00',
      isExpense: true,
    },
    {
      id: '5',
      title: 'Salary',
      dateTime: '2023-04-24T10:00:00',
      category: 'salary' as CategoryType,
      amount: '$5000,00',
      isExpense: false,
    },
  ];

  // Categories chart data
  const categoriesData: CategoryData[] = [
    {
      label: 'Others',
      percentage: 20,
      color: colors.blueOcean, // Dark blue
      showInLegend: true,
    },
    {
      label: 'transport',
      percentage: 30,
      color: colors.blueVivid, // Medium blue
      showInLegend: true,
    },
    {
      label: 'food',
      percentage: 10,
      color: colors.blueVivid, // Medium blue
      showInLegend: true,
    },
    {
      label: 'entertainment',
      percentage: 40,
      color: colors.blueVivid, // Medium blue
      showInLegend: true,
    },
  ];

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
                      {MONTHS.map((item, index) => (
                        <TouchableOpacityBox
                          key={`month-${item}`}
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
                            {item}
                          </Text>
                        </TouchableOpacityBox>
                      ))}
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
                      {years.map(item => (
                        <TouchableOpacityBox
                          key={`year-${item}`}
                          paddingVertical="s8"
                          paddingHorizontal="s12"
                          backgroundColor={
                            selectedYear === item ? 'successLight' : 'white'
                          }
                          borderRadius="s8"
                          mb="s4"
                          onPress={() => {
                            setSelectedYear(item);
                            setShowYearPicker(false);
                          }}
                        >
                          <Text
                            color={
                              selectedYear === item
                                ? 'primary'
                                : 'backgroundContrast'
                            }
                            preset="paragraphMedium"
                            semibold={selectedYear === item}
                          >
                            {item}
                          </Text>
                        </TouchableOpacityBox>
                      ))}
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
          {selectedView === 'spends' ? (
            /* Transactions List */
            <Box>
              {transactions.map(transaction => (
                <ItemListTransaction
                  key={transaction.id}
                  title={transaction.title}
                  dateTime={transaction.dateTime}
                  category={transaction.category}
                  amount={transaction.amount}
                  isExpense={transaction.isExpense}
                />
              ))}
            </Box>
          ) : (
            /* Categories Chart */
            <SemiCircularChart data={categoriesData} size={300} />
          )}
        </ScrollView>
      </BodyBox>
    </Screen>
  );
}
