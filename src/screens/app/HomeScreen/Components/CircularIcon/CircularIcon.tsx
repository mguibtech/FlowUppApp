import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { View } from 'react-native';

import { Icon } from '@components';
import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

export interface CircularIconProps {
  readonly iconName: string;
  readonly size?: number;
  readonly backgroundColor?: ThemeColors;
  readonly iconColor?: ThemeColors;
  readonly iconSize?: number;
}

export function CircularIcon({
  iconName,
  size = 50,
  backgroundColor = 'blueVivid',
  iconColor = 'white',
  iconSize = 24,
}: CircularIconProps) {
  const { colors } = useAppTheme();

  return (
    <View style={{ position: 'relative', width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill={colors[backgroundColor]}
        />
      </Svg>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name={iconName as any} color={iconColor} size={iconSize} />
      </View>
    </View>
  );
}

