import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
import { theme } from '../../theme/theme';
import { useRef } from 'react';

interface TextInputProps extends RNTextInputProps {
    label: string;
    errorMessage?: string;
    boxProps?: BoxProps;
    leftComponent?: React.ReactElement;
    rightComponent?: React.ReactElement;
}

export function TextInput({
    errorMessage,
    label,
    boxProps,
    leftComponent,
    rightComponent,
    ...rNTextInputProps
}: TextInputProps) {

    const $textInputContainer: BoxProps = {
        borderWidth: errorMessage ? 1 : undefined,
        borderColor: errorMessage ? 'error' : undefined,
        paddingHorizontal: 's12',
        paddingVertical: 's8',
        paddingStart: 's32',
        borderRadius: 's18',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'greenLight',
        // opcional, evita ver qualquer scroll interno
        overflow: 'hidden',
    };

    const inputRef = useRef<RNTextInput>(null);


    return (
        <Box {...boxProps}>
            <Text paddingStart='s20' semibold>{label}</Text>
            <Box {...$textInputContainer}>
                {leftComponent && (
                    <Box mr="s8" justifyContent="center">
                        {leftComponent}
                    </Box>
                )}
                <RNTextInput
                    autoCapitalize="none"
                    ref={inputRef}
                    placeholderTextColor="rgba(11, 52, 31, 0.4)" // 40% de opacidade
                    style={$textInputStyle}
                    {...rNTextInputProps}
                />
                {rightComponent && (
                    <Box ml="s16" justifyContent="center">
                        {rightComponent}
                    </Box>
                )}
            </Box>
            {errorMessage &&
                <Box marginTop='s4'>
                    <Text preset='paragraphSmall' semibold color='error'>{errorMessage}</Text>
                </Box>
            }
        </Box>
    )
}

export const $textInputStyle: TextStyle = {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    color: theme.colors.greenDark,
    fontFamily: $fontFamily.regular,
    fontWeight: 'bold',
    ...$fontSizes.paragraphMedium,
};