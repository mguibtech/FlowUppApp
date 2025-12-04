import {
  BodyBox,
  Box,
  Icon,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import { AppProfileScreenProps } from '@routes';

export function FingerprintListScreen({
  navigation,
}: AppProfileScreenProps<'FingerprintListScreen'>) {
  const handleFingerprintDetail = () => {
    navigation.navigate('FingerPrintItemScreen');
  };

  const handleAddFingerprint = () => {
    navigation.navigate('AddFingerprintScreen');
  };

  return (
    <Screen canGoBack title="Impressão digital" icon="notification">
      <BodyBox flex={1} mt="s56" paddingTop="s48">
        <TouchableOpacityBox
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          onPress={handleFingerprintDetail}
        >
          <Box flexDirection="row" alignItems="center" gap="s20">
            <Icon
              name="fingerprint"
              size={50}
              color="white"
              backgroundColor="blueLight"
            />
            <Text preset="paragraphMedium">Guibson digital</Text>
          </Box>
          <Icon name="rightArrow" size={16} />
        </TouchableOpacityBox>

        <TouchableOpacityBox
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottomColor="greenLight"
          mt="s24"
          onPress={handleAddFingerprint}
        >
          <Box flexDirection="row" alignItems="center" gap="s20">
            <Icon name="moreDefault" size={50} color="white" />
            <Text preset="paragraphMedium">Adicionar digital</Text>
          </Box>
          <Icon name="rightArrow" size={16} />
        </TouchableOpacityBox>
      </BodyBox>
    </Screen>
  );
}
