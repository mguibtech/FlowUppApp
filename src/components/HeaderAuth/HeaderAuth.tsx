import { Box, Text } from '@components';

interface Props {
  title: string;
}

export function HeaderAuth({ title }: Props) {
  return (
    <Box
      backgroundColor="greenPrimary"
      borderBottomLeftRadius="s20"
      borderBottomRightRadius="s20"
      justifyContent="center"
      alignItems="center"
      paddingVertical="s56"
    >
      <Text preset="headingMedium">{title}</Text>
    </Box>
  );
}
