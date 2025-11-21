import React from 'react';
import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme';
import Svg, { Rect, Line, G, Text as SvgText, Path } from 'react-native-svg';
import { Dimensions } from 'react-native';

export interface BarData {
  week: string;
  value1: number;
  value2: number;
}

interface BarChartProps {
  title: string;
  data: BarData[];
  maxValue: number;
  yAxisLabels?: string[];
  onSearchPress?: () => void;
  onCalendarPress?: () => void;
}

export function BarChart({
  title,
  data,
  maxValue,
  yAxisLabels = ['1k', '5k', '10k', '15k'],
  onSearchPress,
  onCalendarPress,
}: Readonly<BarChartProps>) {
  const theme = useTheme<Theme>();

  const chartWidth = Dimensions.get('window').width - 48;
  const chartHeight = 160;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;
  const barWidth = 12;
  const barGap = 4;
  const groupGap = 40;

  const chartAreaHeight = chartHeight - paddingTop - paddingBottom;

  const getYPosition = (value: number) => {
    return paddingTop + chartAreaHeight - (value / maxValue) * chartAreaHeight;
  };

  const getBarX = (index: number, barIndex: number) => {
    const groupStartX =
      paddingLeft + index * (barWidth * 2 + barGap + groupGap) + groupGap / 2;
    return groupStartX + barIndex * (barWidth + barGap);
  };

  return (
    <Box backgroundColor="greenLight" borderRadius="s16" padding="s20">
      {/* Header */}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="s16"
      >
        <Text preset="paragraphMedium" semibold color="backgroundContrast">
          {title}
        </Text>
        <Box flexDirection="row" gap="s8">
          {onSearchPress && (
            <Icon
              name="search"
              size={30}
              color="backgroundContrast"
              onPress={onSearchPress}
            />
          )}
          {onCalendarPress && (
            <Icon
              name="calendar"
              size={30}
              color="backgroundContrast"
              onPress={onCalendarPress}
            />
          )}
        </Box>
      </Box>

      {/* Chart */}
      <Box alignItems="center">
        <Svg width={chartWidth} height={chartHeight}>
          {/* Grid Lines */}
          {yAxisLabels.map((label, index) => {
            const value = Number.parseFloat(label.replace('k', '')) * 1000;
            const y = getYPosition(value);
            return (
              <G key={`grid-${label}-${index}`}>
                <Line
                  x1={paddingLeft}
                  y1={y}
                  x2={chartWidth - paddingRight}
                  y2={y}
                  stroke={theme.colors.blueLight}
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  opacity={0.5}
                />
                <SvgText
                  x={paddingLeft - 10}
                  y={y + 4}
                  fontSize={12}
                  fill={theme.colors.backgroundContrast}
                  textAnchor="end"
                >
                  {label}
                </SvgText>
              </G>
            );
          })}

          {/* Bars */}
          {data.map((item, index) => {
            const bar1Height = (item.value1 / maxValue) * chartAreaHeight;
            const bar2Height = (item.value2 / maxValue) * chartAreaHeight;
            const bar1Y = getYPosition(item.value1);
            const bar2Y = getYPosition(item.value2);
            const bar1X = getBarX(index, 0);
            const bar2X = getBarX(index, 1);

            return (
              <G key={`bars-${item.week}-${index}`}>
                {/* Bar 1 (Teal) */}
                <Rect
                  x={bar1X}
                  y={bar1Y}
                  width={barWidth}
                  height={bar1Height}
                  fill={theme.colors.greenPrimary}
                  rx={4}
                />
                {/* Bar 2 (Blue) */}
                <Rect
                  x={bar2X}
                  y={bar2Y}
                  width={barWidth}
                  height={bar2Height}
                  fill={theme.colors.blueVivid}
                  rx={4}
                />
              </G>
            );
          })}

          {/* X-axis Base Line */}
          <Line
            x1={paddingLeft}
            y1={paddingTop + chartAreaHeight}
            x2={chartWidth - paddingRight}
            y2={paddingTop + chartAreaHeight}
            stroke={theme.colors.backgroundContrast}
            strokeWidth={1}
            opacity={0.3}
          />

          {/* X-axis Labels */}
          {data.map((item, index) => {
            const groupCenterX =
              paddingLeft +
              index * (barWidth * 2 + barGap + groupGap) +
              groupGap / 2 +
              barWidth +
              barGap / 2;
            return (
              <SvgText
                key={`label-${item.week}-${index}`}
                x={groupCenterX}
                y={chartHeight - paddingBottom + 20}
                fontSize={11}
                fill={theme.colors.backgroundContrast}
                textAnchor="middle"
              >
                {item.week}
              </SvgText>
            );
          })}
        </Svg>
      </Box>
    </Box>
  );
}
