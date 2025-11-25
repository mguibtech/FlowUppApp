import { BodyBox, Box, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';
import { Image } from 'react-native';
import userProfile from '../../../assets/images/user.png';

export function ProfileScreen({}: AppTabScreenProps<'ProfileScreen'>) {
  return (
    <Screen canGoBack title="Perfil" icon="notification">
      <Box flex={1} mt="s36">
        <BodyBox>
          <Box style={{ alignItems: 'center', marginTop: -70 }}>
            <Image source={userProfile} />
            <Text mt="s14" preset="headingSmall" bold>
              João da Silva
            </Text>
            <Text preset="paragraphMedium">joao.silva@example.com</Text>
          </Box>
        </BodyBox>
      </Box>
    </Screen>
  );
}
