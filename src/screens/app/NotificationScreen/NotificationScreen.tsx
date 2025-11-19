import { Box, IconProps, Screen } from '@components';
import {
  NotificationItem,
  NotificationItemProps,
} from './Components/NotificationItem';
import { FlatList } from 'react-native';

const listNotifications: NotificationItemProps[] = [
  {
    id: '1',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'notification',
  },
  {
    id: '2',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'arrowLeft',
  },
  {
    id: '3',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'food',
  },
  {
    id: '4',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'facebook',
  },
  {
    id: '5',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'google',
  },
  {
    id: '6',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'notification',
  },
  {
    id: '7',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'notification',
  },
  {
    id: '8',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'notification',
  },
  {
    id: '9',
    title: 'New Update',
    subtitle: "We've updated the app to version 1.0.0",
    time: '10:00',
    icon: 'notification',
  },
];

export function NotificationScreen() {
  return (
    <Screen canGoBack title="Notificações" icon="notification">
      <Box
        flex={1}
        backgroundColor="background"
        borderTopLeftRadius="s56"
        borderTopRightRadius="s56"
        paddingHorizontal="s24"
        paddingTop="s24"
      >
        <FlatList
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          data={listNotifications}
          renderItem={({ item }) => <NotificationItem {...item} />}
          ListFooterComponent={<Box height={30} />}
        />
      </Box>
    </Screen>
  );
}
