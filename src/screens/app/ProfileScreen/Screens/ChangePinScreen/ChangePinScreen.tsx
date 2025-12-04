import { BodyBox, Button, Icon, Screen, Text, TextInput } from '@components';
import { AppProfileScreenProps } from '@routes';

export function ChangePinScreen({}: AppProfileScreenProps<'ChangePinScreen'>) {
  const handleChangePassword = () => {
    console.log('Alterar senha');
  };

  return (
    <Screen canGoBack title="Alterar senha" icon="notification">
      <BodyBox flex={1} mt="s56" paddingTop="s48" gap="s24">
        <TextInput
          placeholder="Insira sua senha atual"
          label="Senha atual"
          rightComponent={<Icon name="eyeOff" size={24} />}
        />
        <TextInput
          placeholder="Insira sua nova senha"
          label="Nova senha"
          rightComponent={<Icon name="eyeOff" size={24} />}
        />
        <TextInput
          placeholder="Confirme senha"
          label="Confirme sua nova senha"
          rightComponent={<Icon name="eyeOff" size={24} />}
        />
        <Button
          title="Alterar senha"
          onPress={handleChangePassword}
          width="60%"
          alignSelf="center"
          marginTop="s36"
        />
      </BodyBox>
    </Screen>
  );
}
