import {
  BodyBox,
  Box,
  Icon,
  ItemListTransaction,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import { formatCurrency } from '@utils';
import { CategoryType } from '@types';
import { SectionList } from 'react-native';
import { useState, useMemo } from 'react';

interface Transaction {
  id: string;
  title: string;
  dateTime: string;
  category: CategoryType;
  amount: number;
  isExpense: boolean;
}

interface TransactionSection {
  month: string;
  data: Transaction[];
}

const mockTransactions: TransactionSection[] = [
  {
    month: 'April',
    data: [
      {
        id: '1',
        title: 'Salary',
        dateTime: '2024-04-30T18:27:00',
        category: 'salary',
        amount: 4000,
        isExpense: false,
      },
      {
        id: '2',
        title: 'Others',
        dateTime: '2024-04-24T17:00:00',
        category: 'more',
        amount: 120,
        isExpense: false,
      },
      {
        id: '6',
        title: 'Groceries',
        dateTime: '2024-04-20T14:30:00',
        category: 'groceries',
        amount: 250,
        isExpense: true,
      },
      {
        id: '7',
        title: 'Transport',
        dateTime: '2024-04-15T08:00:00',
        category: 'transport',
        amount: 150,
        isExpense: true,
      },
    ],
  },
  {
    month: 'March',
    data: [
      {
        id: '3',
        title: 'Salary',
        dateTime: '2024-03-31T18:39:00',
        category: 'salary',
        amount: 4000,
        isExpense: false,
      },
      {
        id: '4',
        title: 'Others',
        dateTime: '2024-03-12T09:30:00',
        category: 'more',
        amount: 340,
        isExpense: false,
      },
      {
        id: '8',
        title: 'Food',
        dateTime: '2024-03-10T19:00:00',
        category: 'food',
        amount: 180,
        isExpense: true,
      },
    ],
  },
  {
    month: 'February',
    data: [
      {
        id: '5',
        title: 'Others',
        dateTime: '2024-02-21T19:30:00',
        category: 'more',
        amount: 340,
        isExpense: false,
      },
    ],
  },
];

const totalBalance = 7783;
const totalIncome = 4120;
const totalExpense = 1187.4;

type FilterType = 'all' | 'income' | 'expense';

export function TransactionsScreen() {
  const [filter, setFilter] = useState<FilterType>('all');

  const handleIncomePress = () => {
    setFilter(filter === 'income' ? 'all' : 'income');
  };

  const handleExpensePress = () => {
    setFilter(filter === 'expense' ? 'all' : 'expense');
  };

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') {
      return mockTransactions;
    }

    return mockTransactions
      .map(section => ({
        ...section,
        data: section.data.filter(transaction =>
          filter === 'income' ? !transaction.isExpense : transaction.isExpense,
        ),
      }))
      .filter(section => section.data.length > 0);
  }, [filter]);
  return (
    <Screen canGoBack title="Transaction" icon="notification">
      <Box flex={1}>
        <Box mt="s20">
          <Box
            backgroundColor="white"
            borderRadius="s16"
            padding="s10"
            mb="s20"
            alignItems="center"
            marginHorizontal="s32"
          >
            <Text preset="paragraphSmall" color="backgroundContrast">
              Total Balance
            </Text>
            <Text
              preset="headingMedium"
              bold
              color="backgroundContrast"
              mt="s4"
            >
              {formatCurrency(totalBalance)}
            </Text>
          </Box>

          <Box flexDirection="row" gap="s12" marginHorizontal="s32" mb="s20">
            <TouchableOpacityBox
              flex={1}
              backgroundColor={filter === 'income' ? 'blueOcean' : 'white'}
              borderRadius="s16"
              paddingHorizontal="s10"
              paddingVertical="s10"
              alignItems="center"
              borderWidth={filter === 'income' ? 0 : 1}
              borderColor="blueOcean"
              onPress={handleIncomePress}
            >
              <Icon
                name="income"
                color={filter === 'income' ? 'white' : 'blueOcean'}
                size={25}
              />
              <Text
                preset="paragraphSmall"
                color={filter === 'income' ? 'white' : 'blueOcean'}
                mb="s4"
              >
                Income
              </Text>
              <Text
                preset="headingSmall"
                bold
                color={filter === 'income' ? 'white' : 'blueOcean'}
              >
                {formatCurrency(totalIncome)}
              </Text>
            </TouchableOpacityBox>

            <TouchableOpacityBox
              flex={1}
              backgroundColor={filter === 'expense' ? 'blueOcean' : 'white'}
              borderRadius="s16"
              alignItems="center"
              paddingHorizontal="s10"
              paddingVertical="s10"
              borderWidth={filter === 'expense' ? 0 : 1}
              borderColor="blueOcean"
              onPress={handleExpensePress}
            >
              <Icon
                name="expense"
                color={filter === 'expense' ? 'white' : 'blueOcean'}
                size={25}
              />
              <Text
                preset="paragraphSmall"
                color={filter === 'expense' ? 'white' : 'blueOcean'}
                mb="s4"
              >
                Expense
              </Text>
              <Text
                preset="headingSmall"
                bold
                color={filter === 'expense' ? 'white' : 'blueOcean'}
              >
                {formatCurrency(totalExpense)}
              </Text>
            </TouchableOpacityBox>
          </Box>
        </Box>
        <BodyBox>
          <Box flex={1}>
            <SectionList
              sections={filteredTransactions}
              keyExtractor={(item, index) => item.id || index.toString()}
              renderItem={({ item }) => (
                <ItemListTransaction
                  title={item.title}
                  dateTime={item.dateTime}
                  category={item.category}
                  amount={formatCurrency(item.amount)}
                  isExpense={item.isExpense}
                />
              )}
              renderSectionHeader={({ section }) => (
                <Box
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mb="s16"
                  mt="s32"
                >
                  <Text
                    preset="paragraphMedium"
                    semibold
                    color="backgroundContrast"
                  >
                    {section.month}
                  </Text>
                </Box>
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            />
          </Box>
        </BodyBox>
      </Box>
    </Screen>
  );
}
