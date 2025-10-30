import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components/Icons/types';

export function EyeOffComponent({ size = 20, color = 'black' }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 63 26" fill="none">
            <Path
                d="M6.43525 2C19.8863 19.9124 41.3874 20.4589 55.3256 3.6308C55.7614 3.1107 56.1801 2.56417 56.6074 2M31.5171 15.8574V24M45.0963 12.2697L49.5316 20.1416M55.3171 3.6308L61 8.92872M17.9122 12.2697L13.477 20.1416M7.68294 3.6308L2 8.92872"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
            />
        </Svg>

    )
}