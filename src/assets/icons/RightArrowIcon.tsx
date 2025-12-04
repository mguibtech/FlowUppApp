import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components/Icons/types';

export function RightArrowIcon({ size = 35, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 16" fill="none">
      <Path
        d="M1.25 14.25L8.25 7.75256L1.25 1.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
