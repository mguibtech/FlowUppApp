import {
  BodyBox,
  Box,
  Button,
  Icon,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import { AppProfileScreenProps } from '@routes';
import { DeleteAccountModal } from '../../Components/DeleteAccountModal';
import { useState } from 'react';

export function SecurityScreen({
  navigation,
}: AppProfileScreenProps<'SecurityScreen'>) {
  const [visible, setVisible] = useState(false);
  const handleChangePassword = () => {
    navigation.navigate('ChangePinScreen');
  };
  const handleFingerprintList = () => {
    navigation.navigate('FingerprintListScreen');
  };

  const handleOpenDeleteAccountModal = () => {
    setVisible(true);
  };

  const handleCloseDeleteAccountModal = () => {
    setVisible(false);
  };

  const handleDeleteAccount = () => {
    console.log('Deletar conta');
    setVisible(false);
  };

  return (
    <Screen canGoBack title="Segurança" icon="notification">
      <BodyBox
        flex={1}
        mt="s56"
        paddingTop="s48"
        justifyContent="space-between"
        paddingBottom="s56"
      >
        <Box flexDirection="column">
          <Text preset="headingSmall" bold mb="s32">
            Segurança
          </Text>
          <TouchableOpacityBox
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="greenLight"
            paddingBottom="s32"
            marginBottom="s24"
            onPress={handleChangePassword}
          >
            <Text preset="paragraphMedium">Alterar senha</Text>
            <Icon name="rightArrow" size={16} />
          </TouchableOpacityBox>
          <TouchableOpacityBox
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="greenLight"
            paddingBottom="s32"
            marginBottom="s24"
            onPress={handleFingerprintList}
          >
            <Text preset="paragraphMedium">Impressão digital</Text>
            <Icon name="rightArrow" size={16} />
          </TouchableOpacityBox>
          <TouchableOpacityBox
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="greenLight"
            paddingBottom="s32"
            marginBottom="s24"
          >
            <Text preset="paragraphMedium">Termos e condições</Text>
            <Icon name="rightArrow" size={16} />
          </TouchableOpacityBox>
        </Box>
        <Button title="Deletar conta" onPress={handleOpenDeleteAccountModal} />
      </BodyBox>
      <DeleteAccountModal
        visible={visible}
        onClose={handleCloseDeleteAccountModal}
        onDelete={handleDeleteAccount}
      />
    </Screen>
  );
}
