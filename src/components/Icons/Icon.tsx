import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeOffComponent,
  EyeOnComponent,
  FacebookIcon,
  FingerprintIcon,
  GoogleIcon,
  ProgressCancelIcon,
  ProgressSuccessIcon,
  NotificationIcon,
  ExpenseIcon,
  IncomeIcon,
  CheckIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CarIcon,
  SalaryIcon,
  FoodIcon,
} from '@assets';
import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';
import { Pressable } from 'react-native';

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOff: EyeOffComponent,
  eyeOn: EyeOnComponent,
  facebook: FacebookIcon,
  google: GoogleIcon,
  progressCancel: ProgressCancelIcon,
  progressSuccess: ProgressSuccessIcon,
  fingerprint: FingerprintIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  notification: NotificationIcon,
  expense: ExpenseIcon,
  income: IncomeIcon,
  check: CheckIcon,
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  car: CarIcon,
  salary: SalaryIcon,
  food: FoodIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
