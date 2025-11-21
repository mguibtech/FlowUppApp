import React, { useMemo, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { BodyBox, Box, HeaderBalanceShort, Screen } from '@components';
import { HomeResumeGoals } from './Components/HomeResumeGoals/HomeResumeGoals';
import { PeriodTabs, PeriodType } from './Components/PeriodTabs/PeriodTabs';
import {
  TransactionItem,
  TransactionItemProps,
} from './Components/TransactionItem/TransactionItem';
import { AppTabScreenProps } from '@routes';

export interface TransactionData extends TransactionItemProps {
  readonly id: string;
}

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('monthly');

  const transactions: TransactionData[] = useMemo(
    () => [
      {
        id: '1',
        iconName: 'salary',
        title: 'Salary',
        dateTime: '18:27 - April 30',
        category: 'Monthly',
        amount: '$4.000,00',
        isExpense: false,
      },
      {
        id: '2',
        iconName: 'food',
        title: 'Groceries',
        dateTime: '17:00 - April 24',
        category: 'Pantry',
        amount: '-$100,00',
        isExpense: true,
      },
      {
        id: '3',
        iconName: 'expense',
        title: 'Rent',
        dateTime: '8:30 - April 15',
        category: 'Rent',
        amount: '-$674,40',
        isExpense: true,
      },
    ],
    [],
  );

  const renderTransactionItem: ListRenderItem<TransactionData> = ({ item }) => (
    <TransactionItem
      iconName={item.iconName}
      title={item.title}
      dateTime={item.dateTime}
      category={item.category}
      amount={item.amount}
      isExpense={item.isExpense}
      onPress={item.onPress}
      backgroundColor={item.backgroundColor}
      iconColor={item.iconColor}
    />
  );

  return (
    <Screen title="Bem-vindo de volta!" icon="notification" subtitle="Bom dia">
      <Box flex={1}>
        <HeaderBalanceShort />
        <BodyBox>
          <HomeResumeGoals />

          {/* Period Tabs */}
          <Box marginTop="s8" marginBottom="s16">
            <PeriodTabs
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </Box>

          {/* Transaction Items List */}
          <FlatList
            data={transactions}
            renderItem={renderTransactionItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        </BodyBox>
      </Box>
    </Screen>
  );
}
