import Svg, { Path, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function SearchIcon({ size = 20, color = 'black', ...props }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 30" fill="none" {...props}>
      <Rect width="32.2642" height="30" rx="12.4528" fill="#00D09E" />
      <Path
        d="M20.7821 19.7821L24 23M22.9721 14.486C22.9721 18.6205 19.6205 21.9721 15.486 21.9721C11.3516 21.9721 8 18.6205 8 14.486C8 10.3516 11.3516 7 15.486 7C19.6205 7 22.9721 10.3516 22.9721 14.486Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
