import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components/Icons/types';

export function EyeOnComponent({ size = 20, color = 'black' }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 57 30" fill="none" >
            <Path
                d="M55.0002 24.165C40.3502 3.16501 16.6402 3.16501 2.00024 24.165M50.55 10.505C37.16 -0.835 19.8602 -0.835 6.47021 10.505M38.2501 18.195C38.2501 23.5798 33.8849 27.945 28.5001 27.945C23.1154 27.945 18.7501 23.5798 18.7501 18.195C18.7501 12.8102 23.1154 8.445 28.5001 8.445C33.8849 8.445 38.2501 12.8102 38.2501 18.195Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>

    )
}