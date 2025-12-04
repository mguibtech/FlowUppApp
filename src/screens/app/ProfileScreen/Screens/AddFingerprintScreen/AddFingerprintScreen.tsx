import { Screen, BodyBox, Text, Box, Icon, Button } from '@components';
export function AddFingerprintScreen() {
  return (
    <Screen canGoBack title="Adicionar digital" icon="notification">
      <BodyBox
        flex={1}
        mt="s56"
        paddingTop="s48"
        alignContent="center"
        alignItems="center"
      >
        <Icon name="fingerprint" size={195} color="white" />
        <Text preset="paragraphLarge" semibold mt="s40">
          Usar digital para acessar
        </Text>
        <Text
          preset="paragraphCaptionSmall"
          mt="s12"
          textAlign="center"
          mb="s20"
        >
          Toque no sensor de impressão digital para autenticar e acessar sua
          conta de forma segura.
        </Text>
        <Button title="Usar digital" mt="s40" />
      </BodyBox>
    </Screen>
  );
}
