import { Box, BoxProps } from '@components';

export function BodyBox({ children, ...props }: BoxProps) {
  return (
    <Box
      backgroundColor="background"
      borderTopLeftRadius="s56"
      borderTopRightRadius="s56"
      mt="s20"
      paddingTop="s10"
      paddingHorizontal="s24"
      {...props}
    >
      {children}
    </Box>
  );
}
