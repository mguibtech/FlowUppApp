import { Svg, Path, Rect } from 'react-native-svg';
import { IconBase } from '../../components/Icons/types';

export function CheckIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M10.1223 0.5H1.87774C1.11684 0.5 0.5 1.11684 0.5 1.87774V10.1223C0.5 10.8832 1.11684 11.5 1.87774 11.5H10.1223C10.8832 11.5 11.5 10.8832 11.5 10.1223V1.87774C11.5 1.11684 10.8832 0.5 10.1223 0.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 6.62603L5.30318 8.5L9.5 3.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
