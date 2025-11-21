import { Box, Icon } from '@components';
import { AppTabScreenProps } from '@routes';

export function TransactionsScreen({}: AppTabScreenProps<'TransactionScreen'>) {
  return (
    <Box>
      <Icon name="profile" />
      <Icon name="profileFill" />

      <Icon name="home" />
      <Icon name="homeFill" />

      <Icon name="transaction" />
      <Icon name="transactionFill" />

      <Icon name="analysis" />
      <Icon name="analysisFill" />

      <Icon name="category" />
      <Icon name="categoryFill" />
    </Box>
  );
}
