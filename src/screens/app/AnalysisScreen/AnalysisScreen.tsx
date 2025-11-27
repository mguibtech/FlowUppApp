import React, { useState, useMemo } from 'react';
import { ScrollView } from 'react-native';

import {
  BodyBox,
  Box,
  ExpensePercentageBar,
  Screen,
  BarChart,
  BarData,
} from '@components';
import { IncomeExpenseSummary } from './Components/IncomeExpenseSummary';
import { MyTargets } from './Components/MyTargets';
import {
  PeriodTabsAnalysis,
  PeriodTypeAnalysis,
} from './Components/PeriodTabsAnalysis';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppAnalysisStackParamList } from '@routes';
import { useAnalysisContext } from './Context';

export function AnalysisScreen({
  navigation,
}: NativeStackScreenProps<AppAnalysisStackParamList, 'AnalysisScreen'>) {
  const { transactions, getTransactionsByType } = useAnalysisContext();
  const [selectedPeriod, setSelectedPeriod] =
    useState<PeriodTypeAnalysis>('daily');

  // Calculate income and expense from transactions
  const { income, expense } = useMemo(() => {
    const incomeTransactions = getTransactionsByType(false);
    const expenseTransactions = getTransactionsByType(true);

    const totalIncome = incomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0,
    );
    const totalExpense = expenseTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0,
    );

    return {
      income: totalIncome || 4120, // Fallback to default if no transactions
      expense: totalExpense || 1187.4,
    };
  }, [transactions, getTransactionsByType]);

  // Chart data for the week (Monday to Sunday)
  const chartData: BarData[] = useMemo(
    () => [
      { week: 'Mon', value1: 4000, value2: 7000 },
      { week: 'Tue', value1: 1000, value2: 3000 },
      { week: 'Wed', value1: 7000, value2: 3000 },
      { week: 'Thu', value1: 1000, value2: 5000 },
      { week: 'Fri', value1: 9000, value2: 8000 },
      { week: 'Sat', value1: 1000, value2: 500 },
      { week: 'Sun', value1: 500, value2: 6000 },
    ],
    [],
  );

  const targets = useMemo(
    () => [
      { name: 'Travel', progress: 30 },
      { name: 'Car', progress: 50 },
    ],
    [],
  );

  return (
    <Screen scrollable title="Analysis" icon="notification">
      <Box marginHorizontal="s32" mt="s16">
        <ExpensePercentageBar income={income} expense={expense} />
      </Box>
      <BodyBox>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <Box marginTop="s8" marginBottom="s16">
            <PeriodTabsAnalysis
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </Box>

          <Box marginBottom="s20">
            <BarChart
              title="Income & Expenses"
              data={chartData}
              maxValue={15000}
              onSearchPress={() => {
                navigation.navigate('SearchScreen');
              }}
              onCalendarPress={() => {
                navigation.navigate('CalendarScreen');
              }}
            />
          </Box>

          <IncomeExpenseSummary income={income} expense={expense} />

          <MyTargets targets={targets} />
        </ScrollView>
      </BodyBox>
    </Screen>
  );
}
