import React, { useMemo } from 'react';
import { FlatList, Pressable } from 'react-native';
import { Box, Icon, Screen, Text } from '@components';
import { AccountHeader } from './Components/AccountHeader/AccountHeader';
import { categoryIconName, CategoryType } from '@types';

interface Transaction {
  id: number;
  name: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  category: CategoryType;
}

function TransactionItem({ item }: { item: Transaction }) {
  const formattedAmount = item.amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const formattedDate = new Date(item.date).toLocaleDateString('pt-BR', {
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = new Date(item.date).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const iconCategoryName = categoryIconName[item.category];

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="s12"
    >
      {/* Ícone + Nome + Data */}
      <Box flexDirection="row" alignItems="center" gap="s8">
        {/* Ícone */}
        <Icon name={iconCategoryName} size={40} color="white" />

        {/* Nome + Data */}
        <Box>
          <Text preset="paragraphMedium" color="backgroundContrast">
            {item.name}
          </Text>

          <Text preset="paragraphSmall" color="primary">
            {formattedTime} – {formattedDate}
          </Text>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        width={1}
        height={32}
        backgroundColor="primary"
        marginHorizontal="s4"
      />

      {/* Tipo */}
      <Box>
        <Text preset="paragraphSmall" color="primary">
          {item.type === 'income' ? 'Monthly' : 'Expense'}
        </Text>
      </Box>
      <Box
        width={1}
        height={32}
        backgroundColor="primary"
        marginHorizontal="s4"
      />

      {/* Valor */}
      <Text
        preset="paragraphMedium"
        color={item.type === 'income' ? 'success' : 'error'}
        marginLeft="s4"
      >
        {formattedAmount}
      </Text>
    </Box>
  );
}

export function AccountBalanceScreen() {
  const transactions: Transaction[] = [
    {
      id: 1,
      name: 'Transação 1',
      amount: 100,
      date: '2025-01-01',
      type: 'income',
      category: 'more',
    },
    {
      id: 2,
      name: 'Transação 2',
      amount: 10047,
      date: '2025-01-01',
      type: 'expense',
      category: 'gift',
    },
    {
      id: 3,
      name: 'Transação 3',
      amount: 100,
      date: '2025-01-01',
      type: 'expense',
      category: 'salary',
    },
    {
      id: 4,
      name: 'Transação 4',
      amount: 100,
      date: '2025-01-01',
      type: 'income',
      category: 'transport',
    },
    {
      id: 5,
      name: 'Transação 5',
      amount: 100,
      date: '2025-01-01',
      type: 'expense',
      category: 'groceries',
    },
    {
      id: 6,
      name: 'Transação 6',
      amount: 100,
      date: '2025-01-01',
      type: 'income',
      category: 'gift',
    },
    {
      id: 7,
      name: 'Transação 7',
      amount: 100,
      date: '2025-01-01',
      type: 'expense',
      category: 'medicine',
    },
    {
      id: 8,
      name: 'Transação 8',
      amount: 100,
      date: '2025-01-01',
      type: 'income',
      category: 'food',
    },
    {
      id: 9,
      name: 'Transação 9',
      amount: 100,
      date: '2025-01-01',
      type: 'expense',
      category: 'food',
    },
  ];

  return (
    <Screen canGoBack title="Saldo Bancário" icon="notification">
      <AccountHeader income={4500} expense={2500} />

      <Box
        flex={1}
        mt="s32"
        backgroundColor="white"
        borderTopLeftRadius="s56"
        borderTopRightRadius="s56"
        paddingTop="s40"
        paddingHorizontal="s16"
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mb="s24"
        >
          <Text preset="headingSmall" color="backgroundContrast">
            Transações
          </Text>
          <Pressable
            onPress={() => {
              /* navegar pra tela de todas as transações */
            }}
          >
            <Text preset="paragraphSmall" color="backgroundContrast">
              Mostrar todas
            </Text>
          </Pressable>
        </Box>

        <FlatList<Transaction>
          data={transactions}
          keyExtractor={item => `${item.id}-${item.date}`}
          renderItem={({ item }) => <TransactionItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        />
      </Box>
    </Screen>
  );
}
