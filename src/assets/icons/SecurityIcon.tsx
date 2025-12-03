import Svg, { Path, Rect } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function SecurityIcon({
  size = 20,
  color = 'black',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 57 53" fill="none" {...props}>
      <Rect width="57" height="53" rx="22" fill="#3299FF" />
      <Path
        d="M24.9286 27.7014L27.2788 29.5404L33.7238 22.8621M28.4733 12C28.4733 12 32.5569 17.4005 41.4299 16.0892C41.4299 16.0892 45.9525 36.5966 28.4676 40.5359C10.9827 36.6188 15.5333 16.0892 15.5333 16.0892C24.4063 17.3782 28.4733 12 28.4733 12Z"
        stroke="#F1FFF3"
        strokeWidth="2.22242"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
