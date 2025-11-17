import Svg, { Path } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function TransactionIcon({
  size = 20,
  color = 'black',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 65 50" fill="none" {...props}>
      <Path
        d="M27.3236 24.6253H44.4271V33.7605L62.7442 17.8456L44.4271 1.93066V11.0659H27.3236M37.3512 24.6048H20.2477V15.4696L1.93066 31.3846L20.2477 47.2995V38.1643H37.3512"
        stroke={color}
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
