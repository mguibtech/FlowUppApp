import Svg, { Path, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function MorePressedIcon({
  size = 40,
  color = 'black',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 105 98" fill="none" {...props}>
      <Rect width="105" height="97.6316" rx="25.7895" fill="#0068FF" />
      <Path
        d="M33 48.2H72M52.0667 69V30"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
