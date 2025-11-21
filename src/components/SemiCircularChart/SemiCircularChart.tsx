import React from 'react';
import { Box, Text } from '@components';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme';
import Svg, { Path, G, Text as SvgText } from 'react-native-svg';
import { Dimensions } from 'react-native';

export interface CategoryData {
  label: string;
  percentage: number;
  color: string;
  showInLegend?: boolean;
}

interface SemiCircularChartProps {
  data: CategoryData[];
  size?: number;
}

export function SemiCircularChart({
  data,
  size = 280,
}: Readonly<SemiCircularChartProps>) {
  const theme = useTheme<Theme>();
  const screenWidth = Dimensions.get('window').width - 48;
  const chartSize = Math.min(size, screenWidth - 48);
  const centerX = chartSize / 2;
  const centerY = chartSize / 2; // Center Y at middle for full circle
  const radius = chartSize / 2 - 20;
  const gapAngle = 2; // Gap in degrees between segments

  // Calculate angles for full circle (360 degrees)
  const totalPercentage = data.reduce((sum, item) => sum + item.percentage, 0);
  const totalGapAngle = gapAngle * (data.length - 1); // Total gap angle
  const availableAngle = 360 - totalGapAngle; // Available angle for segments (full circle)
  let currentAngle = -90; // Start from top (12 o'clock)

  const paths = data.map((item, index) => {
    // Normalize percentage to ensure it sums to 100%
    const normalizedPercentage = (item.percentage / totalPercentage) * 100;
    const angle = (normalizedPercentage / 100) * availableAngle; // Convert to degrees for full circle
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;

    // Add gap after this segment (except for the last one)
    currentAngle = endAngle + (index < data.length - 1 ? gapAngle : 0);

    // Convert angles to radians
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    // Calculate start and end points
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    // Large arc flag: 1 if angle > 180, 0 otherwise
    const largeArcFlag = angle > 180 ? 1 : 0;

    // Create path for semi-circle segment
    const path = [
      `M ${centerX} ${centerY}`, // Move to center
      `L ${x1} ${y1}`, // Line to start point
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`, // Arc to end point
      'Z', // Close path
    ].join(' ');

    // Calculate position for percentage text (middle of segment)
    const midAngle = (startAngle + endAngle) / 2;
    const midAngleRad = (midAngle * Math.PI) / 180;
    const textRadius = radius * 0.7; // Position text closer to center
    const textX = centerX + textRadius * Math.cos(midAngleRad);
    const textY = centerY + textRadius * Math.sin(midAngleRad);

    return {
      path,
      textX,
      textY,
      percentage: Math.round(item.percentage), // Display original percentage
      color: item.color,
      label: item.label,
      showInLegend: item.showInLegend !== false,
    };
  });

  return (
    <Box alignItems="center" mb="s24">
      {/* Chart */}
      <Box alignItems="center" justifyContent="center">
        <Svg width={chartSize} height={chartSize}>
          <G>
            {paths.map((segment, index) => (
              <G
                key={`segment-${segment.label}-${segment.percentage}-${index}`}
              >
                <Path
                  d={segment.path}
                  fill={segment.color}
                  stroke={theme.colors.background}
                  strokeWidth={4}
                  strokeLinejoin="round"
                />
                <SvgText
                  x={segment.textX}
                  y={segment.textY}
                  fontSize={18}
                  fill={theme.colors.white}
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {segment.percentage}%
                </SvgText>
              </G>
            ))}
          </G>
        </Svg>
      </Box>

      {/* Legend */}
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap="s16"
      >
        {paths
          .filter(segment => segment.showInLegend)
          .map((segment, index) => (
            <Box
              key={`legend-${segment.label}-${segment.percentage}-${index}`}
              flexDirection="row"
              alignItems="center"
              gap="s8"
            >
              <Box
                width={12}
                height={12}
                borderRadius="s8"
                style={{ backgroundColor: segment.color }}
              />
              <Text color="backgroundContrast" preset="paragraphSmall">
                {segment.label}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
