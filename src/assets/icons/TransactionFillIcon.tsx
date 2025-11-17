import Svg, { Path, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function TransactionFillIcon({
  size = 35,
  color = 'black',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 87 81" fill="none" {...props}>
      <Rect width="87" height="80.8947" rx="33.5789" fill="#00D09E" />
      <Path
        d="M39.393 37.5228H56.4965V46.658L74.8135 30.7431L56.4965 14.8281V23.9633H39.393M49.4206 37.5023H32.3171V28.3671L14 44.282L32.3171 60.197V51.0617H49.4206"
        stroke="#093030"
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
