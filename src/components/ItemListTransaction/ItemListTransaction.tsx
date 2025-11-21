import React from 'react';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { CategoryType, categoryIconName } from '@types';
import { formatDatePtBr, formatMonthPtBr, formatTime } from '@utils';

export interface ItemListTransactionProps {
  title: string;
  dateTime: string; // ex: "18:27 - April 30"
  category: CategoryType;
  amount: string; // ex: "$4.000,00" or "-$100,00"
  isExpense?: boolean; // se true, mostra em azul claro (expense)
  onPress?: () => void;
}

export function ItemListTransaction({
  title,
  dateTime,
  category,
  amount,
  isExpense = false,
  onPress,
}: Readonly<ItemListTransactionProps>) {
  const iconName = categoryIconName[category];

  const Content = (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      paddingVertical="s4"
      onPress={onPress}
      gap="s8"
      mt="s8"
    >
      {/* Circular Icon */}
      <Icon name={iconName} />

      {/* Title and DateTime */}
      <Box flex={1}>
        <Text color="backgroundContrast" preset="paragraphCaption" semibold>
          {title}
        </Text>
        <Text color="blueVivid" preset="paragraphCaptionSmall">
          {formatTime(dateTime)} - {formatMonthPtBr(dateTime)}
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
          preset="paragraphCaption"
          semibold
        >
          {amount}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );

  return Content;
}
