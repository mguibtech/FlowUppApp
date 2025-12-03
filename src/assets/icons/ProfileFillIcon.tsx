import Svg, { Path, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function ProfileFillIcon({
  size = 35,
  color = 'black',
  backgroundColor = 'greenPrimary',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 87 81" fill="none" {...props}>
      <Rect width="87" height="80.8947" rx="33.5789" fill={backgroundColor} />
      <Path
        d="M25.3644 46.0662C24.4092 48.4855 23.947 51.0712 24.0048 53.6715C24.0048 64.4538 63.0316 64.4538 63.0509 53.6715C63.1088 51.0712 62.6466 48.4855 61.6915 46.0662C60.7363 43.647 59.3074 41.4429 57.4888 39.5834C55.6702 37.7239 53.4985 36.2464 51.1011 35.2377C48.7036 34.229 46.1289 33.7094 43.5279 33.7094C40.9269 33.7094 38.3521 34.229 35.9547 35.2377C33.5573 36.2464 31.3855 37.7239 29.5669 39.5834C27.7483 41.4429 26.3195 43.647 25.3644 46.0662Z"
        stroke={color}
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M43.5134 28.5738C47.8423 28.5738 51.3516 25.0646 51.3516 20.7357C51.3516 16.4067 47.8423 12.8975 43.5134 12.8975C39.1845 12.8975 35.6752 16.4067 35.6752 20.7357C35.6752 25.0646 39.1845 28.5738 43.5134 28.5738Z"
        stroke={color}
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
