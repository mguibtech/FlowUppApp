import { Box } from '@components';

export function BodyBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      borderTopLeftRadius="s56"
      borderTopRightRadius="s56"
      mt="s20"
      paddingTop="s10"
      paddingHorizontal="s24"
    >
      {children}
    </Box>
  );
}
