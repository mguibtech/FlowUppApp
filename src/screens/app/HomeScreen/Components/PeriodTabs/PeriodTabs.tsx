import React from 'react';

import { Box, Text, TouchableOpacityBox } from '@components';

export type PeriodType = 'daily' | 'weekly' | 'monthly';

export interface PeriodTabsProps {
  readonly selectedPeriod: PeriodType;
  readonly onPeriodChange: (period: PeriodType) => void;
}

export function PeriodTabs({
  selectedPeriod,
  onPeriodChange,
}: PeriodTabsProps) {
  const tabs: { label: string; value: PeriodType }[] = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ];

  return (
    <Box
      flexDirection="row"
      backgroundColor="greenLight"
      borderRadius="s12"
      padding="s4"
      gap="s4"
    >
      {tabs.map(tab => {
        const isSelected = selectedPeriod === tab.value;
        return (
          <TouchableOpacityBox
            key={tab.value}
            onPress={() => onPeriodChange(tab.value)}
            flex={1}
            {...(isSelected && { backgroundColor: 'primary' })}
            borderRadius="s8"
            paddingVertical="s8"
            paddingHorizontal="s12"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color={isSelected ? 'white' : 'backgroundContrast'}
              preset="paragraphSmall"
              semibold={isSelected}
            >
              {tab.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

