import {
  BodyBox,
  Box,
  Icon,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import { AppProfileScreenProps, AppTabScreenProps } from '@routes';
import { Image } from 'react-native';
import userProfile from '../../../assets/images/user.png';
import { useState } from 'react';
import { LogoutModal } from './Components/LogoutModal';

export function ProfileScreen({
  navigation,
}: AppProfileScreenProps<'ProfileScreen'>) {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  return (
    <Screen canGoBack title="Perfil" icon="notification">
      <BodyBox flex={1} mt="s56">
        <Box style={{ alignItems: 'center', marginTop: -70 }}>
          <Image source={userProfile} />
          <Text mt="s14" preset="headingSmall" bold>
            João da Silva
          </Text>
          <Text preset="paragraphMedium">joao.silva@example.com</Text>
        </Box>
        <Box marginStart="s10" mt="s52" gap="s32">
          <TouchableOpacityBox
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap="s12"
            onPress={() => navigation.navigate('EditProfileScreen')}
          >
            <Icon
              name="profileFill"
              size={60}
              color="white"
              backgroundColor="blueLight"
            />
            <Text semibold>Editar perfil</Text>
          </TouchableOpacityBox>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap="s12"
          >
            <Icon name="security" size={60} color="white" />
            <Text semibold>Segurança</Text>
          </Box>
          <TouchableOpacityBox
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap="s12"
            onPress={() => navigation.navigate('SecurityScreen')}
          >
            <Icon name="setting" size={60} />
            <Text semibold>Configurações</Text>
          </TouchableOpacityBox>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap="s12"
          >
            <Icon
              name="logout"
              size={60}
              color="white"
              backgroundColor="blueLight"
              onPress={() => setLogoutModalVisible(true)}
            />
            <Text semibold>Sair</Text>
          </Box>
        </Box>
      </BodyBox>
      <LogoutModal
        visible={logoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
      />
    </Screen>
  );
}
