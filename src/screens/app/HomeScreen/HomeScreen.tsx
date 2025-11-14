import { Box, HeaderBalanceShort, Screen, Text } from '@components';
import { HomeResumeGoals } from './Components/HomeResumeGoals/HomeResumeGoals';

export function HomeScreen() {
  return (
    <Screen title="Bem-vindo de volta!" icon="notification" subtitle="Bom dia">
      <Box flex={1}>
        <HeaderBalanceShort />
        <Box
          flex={1}
          backgroundColor="background"
          borderTopLeftRadius="s56"
          borderTopRightRadius="s56"
          mt="s20"
          paddingTop="s24"
          paddingHorizontal="s24"
        >
          <HomeResumeGoals />
        </Box>
      </Box>
    </Screen>
  );
}
