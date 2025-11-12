import React from 'react';



import { buttonPresets } from './buttonPressets';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Text, TextProps } from '../Text/Text';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
    disabled?: boolean;
    titlePreset?: TextProps;
}

export function Button({
    title,
    loading,
    preset = 'primary',
    disabled,
    titlePreset,
    ...touchableOpacityBoxProps
}: ButtonProps) {
    const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            paddingVertical="s4"
            paddingHorizontal="s32"
            alignItems="center"
            justifyContent="center"
            borderRadius="s32"
            {...buttonPreset.container}
            {...touchableOpacityBoxProps}>
            {loading ? (
                <ActivityIndicator color={buttonPreset.content} />
            ) : (
                <Text preset="paragraphMedium" bold color={buttonPreset.content} {...titlePreset}>
                    {title}
                </Text>
            )}
        </TouchableOpacityBox>
    );
}
