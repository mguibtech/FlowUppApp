import React from 'react';

import { Box, Text, TouchableOpacityBox } from '@components';
import { ThemeColors } from '@theme';
import { CircularIcon } from '../CircularIcon/CircularIcon';

export interface TransactionItemProps {
  readonly iconName: string;
  readonly title: string;
  readonly dateTime: string; // ex: "18:27 - April 30"
  readonly category: string;
  readonly amount: string; // ex: "$4.000,00" or "-$100,00"
  readonly isExpense?: boolean; // se true, mostra em azul claro (expense)
  readonly onPress?: () => void;
  readonly backgroundColor?: ThemeColors;
  readonly iconColor?: ThemeColors;
}

export function TransactionItem({
  iconName,
  title,
  dateTime,
  category,
  amount,
  isExpense = false,
  onPress,
  backgroundColor = 'blueVivid',
  iconColor = 'white',
}: TransactionItemProps) {
  const Content = (
    <Box flexDirection="row" alignItems="center" gap="s16" paddingVertical="s8">
      {/* Circular Icon */}
      <CircularIcon
        iconName={iconName}
        size={50}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        iconSize={24}
      />

      {/* Title and DateTime */}
      <Box flex={1}>
        <Text color="backgroundContrast" preset="paragraphMedium" semibold>
          {title}
        </Text>
        <Text color="blueVivid" preset="paragraphCaptionSmall">
          {dateTime}
        </Text>
      </Box>

      {/* Separator */}
      <Box width={1} height="100%" backgroundColor="primary" />

      {/* Category */}
      <Box minWidth={60} alignItems="center">
        <Text color="backgroundContrast" preset="paragraphSmall">
          {category}
        </Text>
      </Box>

      {/* Separator */}
      <Box width={1} height="100%" backgroundColor="primary" />

      {/* Amount */}
      <Box minWidth={80} alignItems="flex-end">
        <Text
          color={isExpense ? 'blueVivid' : 'backgroundContrast'}
          preset="paragraphMedium"
          semibold
        >
          {amount}
        </Text>
      </Box>
    </Box>
  );

  if (onPress) {
    return (
      <TouchableOpacityBox onPress={onPress} activeOpacity={0.7}>
        {Content}
      </TouchableOpacityBox>
    );
  }

  return Content;
}
