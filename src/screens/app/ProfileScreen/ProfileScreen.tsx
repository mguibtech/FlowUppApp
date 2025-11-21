import { Box, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function ProfileScreen({}: AppTabScreenProps<'ProfileScreen'>) {
  return (
    <Box>
      <Text>Profile</Text>
    </Box>
  );
}
