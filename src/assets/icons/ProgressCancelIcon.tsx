

import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components/Icons/types';

export function ProgressCancelIcon({ size = 35, color = 'black' }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 107 107" fill="none">
            <Path d="M53.5 103.5C81.1142 103.5 103.5 81.1142 103.5 53.5C103.5 25.8858 81.1142 3.5 53.5 3.5C25.8858 3.5 3.5 25.8858 3.5 53.5C3.5 81.1142 25.8858 103.5 53.5 103.5Z" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M31.5 76.5L53.3571 54L75.2143 31.5" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M31.5 31.5L53.3571 54L75.2143 76.5" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}