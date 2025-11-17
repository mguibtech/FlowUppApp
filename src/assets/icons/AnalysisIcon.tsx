import Svg, { Path } from 'react-native-svg';

import { IconBase } from '../../components/Icons/types';

export function AnalysisIcon({
  size = 20,
  color = 'black',
  ...props
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
      <Path
        d="M46.1025 46.1025L57.2227 57.2227M13.437 17.2209V38.3802M20.4933 38.3802V28.5824M35.0016 38.3802V33.4861M27.5496 38.3802V17.2209M42.1738 38.3802V25.3101M53.6704 27.8005C53.6704 42.0881 42.0881 53.6704 27.8005 53.6704C13.513 53.6704 1.93066 42.0881 1.93066 27.8005C1.93066 13.513 13.513 1.93066 27.8005 1.93066C42.0881 1.93066 53.6704 13.513 53.6704 27.8005Z"
        stroke={color}
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
