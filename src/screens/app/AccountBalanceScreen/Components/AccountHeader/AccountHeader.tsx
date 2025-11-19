import { Box, ExpensePercentageBar, Icon, Text } from '@components';

interface AccountHeaderProps {
  readonly income: number;
  readonly expense: number;
}

export function AccountHeader({ income, expense }: AccountHeaderProps) {
  return (
    <Box flexDirection="column" marginHorizontal="s20">
      {/* Header */}
      <Box>
        {/* ProgessBar */}
        <Box marginHorizontal="s16">
          <ExpensePercentageBar
            income={income}
            expense={expense}
            showPercentage
          />
        </Box>
      </Box>
    </Box>
  );
}
