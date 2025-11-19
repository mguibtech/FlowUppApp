import { ExpensePercentageBar, TouchableOpacityBox } from '@components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '@routes';

interface HeaderBalanceShortProps {
  readonly income?: number;
  readonly expense?: number;
}

export function HeaderBalanceShort({
  income = 7783,
  expense = -6567.4,
}: HeaderBalanceShortProps) {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  function handleNavigateToAccountBalance() {
    navigation.navigate('AccountBalanceScreen');
  }

  return (
    <TouchableOpacityBox
      borderColor="white"
      borderRadius="s16"
      padding="s16"
      marginHorizontal="s24"
      onPress={handleNavigateToAccountBalance}
    >
      <ExpensePercentageBar income={income} expense={expense} />
    </TouchableOpacityBox>
  );
}
