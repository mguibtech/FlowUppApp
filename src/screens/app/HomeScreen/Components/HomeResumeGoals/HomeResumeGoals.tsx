import {
  Box,
  CircularProgressIcon,
  Icon,
  SelectInput,
  Text,
  TouchableOpacityBox,
} from '@components';

export function HomeResumeGoals() {
  return (
    <Box
      backgroundColor="primary"
      borderRadius="s36"
      paddingHorizontal="s20"
      paddingBottom="s12"
      alignItems="center"
      justifyContent="center"
    >
      {/* Header */}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="s12"
      >
        <Text preset="headingSmall" color="white">
          Economias
        </Text>
        <Box flex={1}>
          <SelectInput
            items={[
              { label: 'Meta', value: 'meta' },
              { label: 'Resumo do mês', value: 'resumoDoMes' },
            ]}
            value={null}
            onValueChange={() => {}}
            placeholder="Metas"
          />
        </Box>
      </Box>

      {/* Body */}
      <TouchableOpacityBox
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="s12"
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

        <Box borderWidth={1} height="100%" borderColor="white" />

        <Box flex={1} flexDirection="column" alignItems="center" gap="s12">
          <Box flexDirection="row" alignItems="center" gap="s12">
            <Icon name="salary" size={31} />
            <Box flexDirection="column" alignItems="center">
              <Text preset="paragraphSmall">Saldo da Semana</Text>
              <Text preset="headingSmall" color="blueVivid" bold>
                R$ 100,00
              </Text>
            </Box>
          </Box>

          <Box borderWidth={1} borderColor="white" width="100%" height={1} />

          <Box flexDirection="row" alignItems="center" gap="s12">
            <Icon name="food" size={31} />
            <Box flexDirection="column" alignItems="center">
              <Text preset="paragraphSmall">Saldo da Semana</Text>
              <Text preset="headingSmall" color="blueVivid" bold>
                R$ 100,00
              </Text>
            </Box>
          </Box>
        </Box>
      </TouchableOpacityBox>
    </Box>
  );
}
