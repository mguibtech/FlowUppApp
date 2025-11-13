import { Box, Icon, ScreenProps, Text, TouchableOpacityBox } from '@components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '@routes';

const ICON_SIZE = 30;
type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'icon' | 'subtitle'>;
type NavigationProp = StackNavigationProp<AppStackParamList>;

export function ScreenHeader({ canGoBack, title, icon, subtitle }: Props) {
  const navigation = useNavigation<NavigationProp>();
  const handlePressIcon = () => {
    if (icon === 'notification') {
      navigation.navigate('NotificationScreen');
    }
  };
  return (
    <Box
      flexDirection="row"
      mb="s24"
      paddingHorizontal="s24"
      alignItems="center"
      justifyContent="space-between"
    >
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={navigation.goBack}
        >
          <Icon size={ICON_SIZE} name="arrowLeft" />
        </TouchableOpacityBox>
      )}
      <Box>
        {title && <Text preset="headingSmall">{title}</Text>}
        {subtitle && <Text>{subtitle}</Text>}
      </Box>
      {icon && <Icon onPress={handlePressIcon} size={ICON_SIZE} name={icon} />}
    </Box>
  );
}
