import {
  BodyBox,
  Box,
  Button,
  Screen,
  Text,
  TextInput,
  ToggleSwitch,
} from '@components';
import { AppProfileScreenProps } from '@routes';
import { Image } from 'react-native';
import { useState } from 'react';
import userProfile from '../../../../../assets/images/user.png';

export function EditProfileScreen({}: AppProfileScreenProps<'EditProfileScreen'>) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  async function handleSave() {
    console.log('Salvar');
  }
  return (
    <Screen scrollable canGoBack title="Perfil" icon="notification">
      <BodyBox flex={1} mt="s56">
        <Box style={{ alignItems: 'center', marginTop: -70 }}>
          <Image source={userProfile} />
          <Text mt="s14" preset="headingSmall" bold>
            João da Silva
          </Text>
          <Text preset="paragraphMedium">joao.silva@example.com</Text>
        </Box>
        <Box marginStart="s10" mt="s24">
          <Text preset="headingMedium">Configurações do perfil</Text>
          <TextInput
            label="Nome"
            placeholder="Informar seu nome"
            value={name}
            onChangeText={setName}
            boxProps={{
              mt: 's20',
              mb: 's16',
            }}
          />
          <TextInput
            label="Número de telefone"
            placeholder="Informar seu número de telefone"
            value={phone}
            onChangeText={setPhone}
            boxProps={{
              mb: 's16',
            }}
          />
          <TextInput
            label="Email"
            placeholder="Informar seu email"
            value={email}
            onChangeText={setEmail}
            boxProps={{
              mb: 's16',
            }}
          />

          <Box gap="s16">
            <ToggleSwitch
              label="Receber notificações"
              onValueChange={setPushNotifications}
              value={pushNotifications}
            />

            <ToggleSwitch
              label="Modo escuro"
              onValueChange={setDarkTheme}
              value={darkTheme}
            />
          </Box>

          <Button
            title="Salvar"
            onPress={handleSave}
            width="60%"
            alignSelf="center"
            mt="s32"
          />
        </Box>
      </BodyBox>
    </Screen>
  );
}
