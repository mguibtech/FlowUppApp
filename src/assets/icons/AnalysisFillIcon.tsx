import Svg, { Path, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function AnalysisFillIcon({
  size = 35,
  color = 'black',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 87 81" fill="none" {...props}>
      <Rect width="87" height="80.8947" rx="33.5789" fill="#00D09E" />
      <Path
        d="M60.1719 54.1736L71.2921 65.2938M27.5063 25.292V46.4512M34.5626 46.4512V36.6535M49.071 46.4512V41.5572M41.6189 46.4512V25.292M56.2431 46.4512V33.3811M67.7398 35.8716C67.7398 50.1591 56.1574 61.7415 41.8699 61.7415C27.5823 61.7415 16 50.1591 16 35.8716C16 21.5841 27.5823 10.0017 41.8699 10.0017C56.1574 10.0017 67.7398 21.5841 67.7398 35.8716Z"
        stroke={color}
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
