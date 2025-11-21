import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Box, Text } from '@components';
import { useAppTheme } from '@hooks';

interface Target {
  name: string;
  progress: number;
}

interface MyTargetsProps {
  targets: Target[];
}

export function MyTargets({ targets }: MyTargetsProps) {
  const { colors } = useAppTheme();

  return (
    <Box marginTop="s24">
      <Text preset="headingSmall" color="backgroundContrast" marginBottom="s16">
        My Targets
      </Text>
      <Box flexDirection="row" gap="s16">
        {targets.map((target, index) => {
          const size = 100;
          const strokeWidth = 8;
          const radius = (size - strokeWidth) / 2;
          const circumference = 2 * Math.PI * radius;
          const progressValue = Math.min(Math.max(target.progress, 0), 100);
          const strokeDashoffset =
            circumference - (progressValue / 100) * circumference;

          return (
            <Box
              key={index}
              flex={1}
              backgroundColor="blueLight"
              borderRadius="s16"
              padding="s20"
              alignItems="center"
              justifyContent="center"
              minHeight={140}
            >
              <Box alignItems="center" gap="s8">
                <View
                  style={{ position: 'relative', width: size, height: size }}
                >
                  <Svg
                    width={size}
                    height={size}
                    style={{ transform: [{ rotate: '-90deg' }] }}
                  >
                    {/* Background circle */}
                    <Circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      stroke={colors.white}
                      strokeWidth={strokeWidth}
                      fill="transparent"
                    />
                    {/* Progress circle */}
                    {progressValue > 0 && (
                      <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={colors.blueVivid}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    )}
                  </Svg>
                  {/* Percentage text centered */}
                  <View style={styles.textContainer}>
                    <Text
                      color="white"
                      preset="headingMedium"
                      textAlign="center"
                      bold
                    >
                      {`${target.progress}%`}
                    </Text>
                  </View>
                </View>
                {/* Target name */}
                <Text color="white" preset="paragraphMedium" textAlign="center">
                  {target.name}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
