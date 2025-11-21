import { Box, CircularProgressIcon, Icon, Text } from '@components';

export function QuicklyAnalysisHeader() {
  return (
    <Box
      paddingHorizontal="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="s12"
      mt="s24"
    >
      <CircularProgressIcon
        iconName="car"
        progress={35}
        size={80}
        strokeWidth={3}
        progressColor="blueVivid"
        backgroundColor="white"
        iconColor="backgroundContrast"
        iconSize={40}
        title="Meta"
      />
      <Box borderWidth={1} borderColor="white" height="100%" width={1} />
      <Box ml="s8" flexDirection="column" alignItems="center" gap="s8">
        <Box flexDirection="row" alignItems="center" gap="s8">
          <Icon name="car" size={38} />
          <Box flexDirection="column" alignItems="center">
            <Text preset="paragraphSmall">Gastos Semanais</Text>
            <Text preset="headingSmall" bold>
              R$ 100,00
            </Text>
          </Box>
        </Box>
        <Box borderWidth={1} borderColor="white" width="100%" height={1} />
        <Box flexDirection="row" alignItems="center" gap="s8">
          <Icon name="food" size={38} />
          <Box flexDirection="column" alignItems="center">
            <Text preset="paragraphSmall">Gastos Semanais</Text>
            <Text preset="headingSmall" color="blueVivid" bold>
              R$ 100,00
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
