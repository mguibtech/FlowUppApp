import { Box, Icon, IconProps, Text } from '@components';

export interface NotificationItemProps {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  icon: IconProps['name'];
}

export function NotificationItem({
  id,
  title,
  subtitle,
  time,
  icon,
}: NotificationItemProps) {
  return (
    <Box borderBottomWidth={1} borderColor="primary" mb="s16" key={id}>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Icon name={icon} />
        <Box>
          <Text semibold>{title}</Text>
          <Text preset="paragraphSmall">{subtitle}</Text>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap="s8"
      >
        <Box width={70} />
        <Text preset="paragraphSmall" color="blueLight" mb="s4">
          {time}
        </Text>
      </Box>
    </Box>
  );
}
