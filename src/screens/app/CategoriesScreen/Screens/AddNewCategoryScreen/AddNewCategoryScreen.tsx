import { Box, Icon, Screen, TouchableOpacityBox } from '@components';

export function AddNewCategoryScreen() {
  return (
    <Screen title="Add New Category" icon="notification">
      <Box>
        <TouchableOpacityBox>
          <Icon name="moreDefault" size={24} color="white" />
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
}
