import { BodyBox, Box, Icon, Screen, Text } from '@components';
import { AppProfileScreenProps } from '@routes';

export function SecurityScreen({}: AppProfileScreenProps<'SecurityScreen'>) {
  return (
    <Screen canGoBack title="Segurança" icon="notification">
      <BodyBox flex={1} mt="s56" paddingTop="s48">
        <Text preset="headingSmall" bold>
          Segurança
        </Text>
        <Box marginTop="s40">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="greenLight"
            paddingBottom="s32"
            marginBottom="s24"
          >
            <Text preset="paragraphMedium">Alterar senha</Text>
            <Icon name="arrowRight" size={24} />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="greenLight"
            paddingBottom="s32"
            marginBottom="s24"
          >
            <Text preset="paragraphMedium">Impressão digital</Text>
            <Icon name="arrowRight" size={24} />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="greenLight"
            paddingBottom="s32"
            marginBottom="s24"
          >
            <Text preset="paragraphMedium">Termos e condições</Text>
            <Icon name="arrowRight" size={24} />
          </Box>
        </Box>
      </BodyBox>
    </Screen>
  );
}
