import { Box, HeaderBalanceShort, Screen, Text } from '@components';

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
          mt="s32"
          paddingTop="s32"
        >
          <Text preset="headingSmall" color="backgroundContrast">
            Resumo do mês
          </Text>
        </Box>
      </Box>
    </Screen>
  );
}
