import { Box, Icon, Text } from '@components';
import { useMemo } from 'react';

interface ExpensePercentageBarProps {
  income: number;
  expense: number;
  showPercentage?: boolean;
}

export function ExpensePercentageBar({
  income,
  expense,
  showPercentage = false,
}: ExpensePercentageBarProps) {
  const percentage = useMemo(() => {
    if (income === 0) return 0;
    const calculatedPercentage = Math.round((Math.abs(expense) / income) * 100);
    return Math.min(calculatedPercentage, 100);
  }, [income, expense]);

  const getMessage = () => {
    if (percentage <= 30) {
      return `${percentage}% dos seus gastos, está bom.`;
    } else if (percentage <= 50) {
      return `${percentage}% dos seus gastos, atenção.`;
    } else {
      return `${percentage}% dos seus gastos, cuidado!`;
    }
  };

  const formattedExpense = Math.abs(expense).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Determina se a porcentagem deve aparecer acima da barra
  const showPercentageAbove = percentage <= 20 || percentage >= 85;

  return (
    <Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="s14"
      >
        {/* Total de Entradas */}
        <Box>
          <Box flexDirection="row" alignItems="center" gap="s4">
            {/* Icone de entradas da balança */}
            <Icon name="income" size={12} color="backgroundContrast" />
            <Text preset="paragraphSmall">Total de Entradas</Text>
          </Box>
          <Text preset="headingSmall" color="white">
            R${' '}
            {income.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
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
          <Text preset="headingSmall" color="blueVivid">
            -R$ {formattedExpense}
          </Text>
        </Box>
      </Box>
      {/* Porcentagem acima da barra (quando porcentagem é muito baixa ou muito alta) */}
      {showPercentageAbove && (
        <Box
          flexDirection="row"
          justifyContent={percentage <= 20 ? 'flex-start' : 'flex-end'}
          paddingHorizontal="s4"
          marginBottom="s4"
        >
          <Text preset="paragraphSmall" color="blueVivid" bold>
            {percentage}%
          </Text>
        </Box>
      )}

      {/* Barra de Progresso */}
      <Box
        height={32}
        borderRadius="s16"
        backgroundColor="white"
        overflow="hidden"
        position="relative"
      >
        {/* Porcentagem preenchida */}
        <Box
          height="100%"
          width={`${percentage}%`}
          backgroundColor="greenDark"
          borderRadius="s16"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          left={0}
          flexDirection="row"
          paddingHorizontal="s8"
        >
          {/* Porcentagem dentro da barra azul (quando não está acima) */}
          {!showPercentageAbove && percentage > 15 && (
            <Text preset="paragraphSmall" color="white" bold={true}>
              {percentage}%
            </Text>
          )}
          {/* Valor dentro da barra azul quando a porcentagem é alta o suficiente para cobrir */}
          {percentage >= 75 && (
            <Text preset="paragraphSmall" color="white">
              -R$ {formattedExpense}
            </Text>
          )}
        </Box>

        {/* Valor dos gastos dentro da barra branca - lado direito (quando não está coberto pela azul) */}
        {percentage < 75 && (
          <Box
            position="absolute"
            right={8}
            height="100%"
            justifyContent="center"
          >
            <Text preset="paragraphSmall" color="backgroundContrast">
              -R$ {formattedExpense}
            </Text>
          </Box>
        )}

        {/* Porcentagem dentro da barra quando é muito baixa e não está acima */}
        {!showPercentageAbove && percentage <= 15 && (
          <Box
            position="absolute"
            left={8}
            height="100%"
            justifyContent="center"
          >
            <Text preset="paragraphSmall" color="white" bold>
              {percentage}%
            </Text>
          </Box>
        )}
      </Box>

      {showPercentage && (
        <Box flexDirection="row" gap="s16" justifyContent="center" mt="s24">
          {/* Total de Entradas */}
          <Box
            justifyContent="center"
            alignItems="center"
            backgroundColor="white"
            paddingHorizontal="s36"
            paddingVertical="s8"
            borderRadius="s16"
          >
            <Icon name="income" size={25} color="greenPrimary" />
            <Text preset="paragraphSmall">Entradas</Text>
            <Text preset="headingSmall">
              {income.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </Box>
          {/* Total de Gastos */}
          <Box
            justifyContent="center"
            alignItems="center"
            backgroundColor="white"
            paddingHorizontal="s36"
            paddingVertical="s8"
            borderRadius="s16"
          >
            <Icon name="expense" size={25} color="blueVivid" />
            <Text preset="paragraphSmall">Gastos</Text>
            <Text preset="headingSmall">
              {expense.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </Box>
        </Box>
      )}

      {/* Mensagem com ícone */}
      <Box
        ml="s32"
        flexDirection="row"
        alignItems="center"
        gap="s8"
        marginTop="s12"
      >
        <Icon name="check" size={12} color="backgroundContrast" />
        <Text preset="paragraphMedium" color="backgroundContrast">
          {getMessage()}
        </Text>
      </Box>
    </Box>
  );
}
