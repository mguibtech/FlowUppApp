import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  TextProps,
} from '@components';
import { AppBottomTabParamList } from '@routes';
import { $shadowProps } from '@theme';

import { mapScreenToProps } from './mapScreenToProps';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <Box
      style={{ paddingBottom: insets.bottom }}
      {...$boxWrapper}
      backgroundColor="greenLight"
      borderTopLeftRadius="s8"
      borderTopRightRadius="s8"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: undefined,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={index}
            {...$itemWrapper}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            mb="s8"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'background',
  flexDirection: 'row',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: $shadowProps.shadowOpacity,
  shadowRadius: $shadowProps.shadowRadius,
  elevation: $shadowProps.elevation,
};
