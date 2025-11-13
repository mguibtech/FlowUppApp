import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { FooterBalaceShort } from './Components/FooterBalaceShort';

interface HeaderBalanceShortProps {
  readonly income?: number;
  readonly expense?: number;
}

export function HeaderBalanceShort({
  income = 7783,
  expense = -6567.4,
}: HeaderBalanceShortProps) {
  const formattedIncome = income.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedExpense = Math.abs(expense).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <TouchableOpacityBox
      borderWidth={1}
      borderColor="white"
      borderRadius="s16"
      padding="s16"
      marginHorizontal="s24"
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Total de Entradas */}
        <Box>
          <Box flexDirection="row" alignItems="center" gap="s4">
            {/* Icone de entradas da balança */}
            <Icon name="income" size={12} color="backgroundContrast" />
            <Text preset="paragraphSmall">Total de Entradas</Text>
          </Box>
          <Text preset="headingMedium" color="white">
            R$ {formattedIncome}
          </Text>
        </Box>

        {/* Separador */}
        <Box width={2} height={42} backgroundColor="white" />

        {/* Total de Gastos */}
        <Box>
          <Box flexDirection="row" alignItems="center" gap="s4">
            {/* Icone de entradas da balança */}
            <Icon name="expense" size={12} color="backgroundContrast" />
            <Text preset="paragraphSmall">Total de Gastos</Text>
          </Box>
          <Text preset="headingMedium" color="blueVivid">
            -R$ {formattedExpense}
          </Text>
        </Box>
      </Box>

      <FooterBalaceShort income={income} expense={expense} />
    </TouchableOpacityBox>
  );
}
