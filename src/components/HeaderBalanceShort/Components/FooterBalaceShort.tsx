import { Box } from '@components';
import { ExpensePercentageBar } from './ExpensePercentageBar';

interface FooterBalaceShortProps {
  readonly income: number;
  readonly expense: number;
}

export function FooterBalaceShort({ income, expense }: FooterBalaceShortProps) {
  return (
    <Box>
      <ExpensePercentageBar income={income} expense={expense} />
    </Box>
  );
}
