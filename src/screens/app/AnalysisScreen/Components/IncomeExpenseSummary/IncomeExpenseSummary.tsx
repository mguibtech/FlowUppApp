import React from 'react';
import { Box, Icon, Text } from '@components';
import { formatCurrency } from '@utils';

interface IncomeExpenseSummaryProps {
  income: number;
  expense: number;
}

export function IncomeExpenseSummary({
  income,
  expense,
}: IncomeExpenseSummaryProps) {
  return (
    <Box flexDirection="row">
      {/* Income Card */}
      <Box flex={1} alignItems="center">
        <Box
          borderRadius="s12"
          width={48}
          height={48}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name="income" size={25} color="primary" />
        </Box>
        <Text preset="paragraphSmall" color="backgroundContrast">
          Entradas
        </Text>
        <Text preset="headingSmall" color="backgroundContrast" bold>
          {formatCurrency(income)}
        </Text>
      </Box>

      {/* Expense Card */}
      <Box flex={1} alignItems="center">
        <Box
          borderRadius="s12"
          width={48}
          height={48}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name="expense" size={25} color="blueVivid" />
        </Box>
        <Text preset="paragraphSmall" color="backgroundContrast">
          Despesas
        </Text>
        <Text preset="headingSmall" bold>
          {formatCurrency(expense)}
        </Text>
      </Box>
    </Box>
  );
}
