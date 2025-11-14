import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Box, Icon, Text } from '@components';
import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

export interface CircularProgressIconProps {
  readonly iconName: string;
  readonly progress: number; // 0-100
  readonly size?: number;
  readonly strokeWidth?: number;
  readonly progressColor?: ThemeColors;
  readonly backgroundColor?: ThemeColors;
  readonly iconColor?: ThemeColors;
  readonly iconSize?: number;
  readonly iconBackgroundColor?: ThemeColors; // Background circle for icon
  readonly title?: string;
  readonly subtitle?: string;
}

export function CircularProgressIcon({
  iconName,
  progress,
  size = 100,
  strokeWidth = 8,
  progressColor = 'blueVivid',
  backgroundColor = 'white',
  iconColor = 'backgroundContrast',
  iconSize = 37,
  iconBackgroundColor,
  title,
  subtitle,
}: CircularProgressIconProps) {
  const { colors } = useAppTheme();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressValue = Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset = circumference - (progressValue / 100) * circumference;
  const iconBgRadius = iconBackgroundColor ? size * 0.35 : 0;

  return (
    <Box alignItems="center" gap="s8">
      <View style={{ position: 'relative', width: size, height: size }}>
        <Svg width={size} height={size} style={{ transform: [{ rotate: '-90deg' }] }}>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors[backgroundColor]}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          {progressValue > 0 && (
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={colors[progressColor]}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          )}
          {/* Icon background circle */}
          {iconBackgroundColor && (
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={iconBgRadius}
              fill={colors[iconBackgroundColor]}
            />
          )}
        </Svg>
        {/* Icon centered */}
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} color={iconColor} size={iconSize} />
        </View>
      </View>

      {/* Labels */}
      {title && (
        <Text color="white" preset="paragraphMedium" textAlign="center">
          {title}
        </Text>
      )}
      {subtitle && (
        <Text color="white" preset="paragraphMedium" textAlign="center">
          {subtitle}
        </Text>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

