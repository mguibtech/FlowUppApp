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
  AnalysisIcon,
  AnalysisFillIcon,
  CategoryIcon,
  CategoryFillIcon,
  HomeFillIcon,
  HomeIcon,
  ProfileFillIcon,
  ProfileIcon,
  TransactionFillIcon,
  TransactionIcon,
  CarDefaultIcon,
  EntertainmentPressedIcon,
  EntertainmentDefaultIcon,
  CarPressedIcon,
  FoodPressedIcon,
  FoodDefaultIcon,
  GroceriesDefaultIcon,
  GroceriesPressedIcon,
  GiftDefaultIcon,
  GiftPressedIcon,
  RentDefaultIcon,
  RentPressedIcon,
  MedicineDefaultIcon,
  MedicinePressedIcon,
  NewHomePressedIcon,
  NewHomeDefaultIcon,
  SavingDefaultIcon,
  TravelDefaultIcon,
  TransportPressedIcon,
  TransportDefaultIcon,
  WeddingPressedIcon,
  WeddingDefaultIcon,
  SavingPressedIcon,
  TravelPressedIcon,
  MoreDefaultIcon,
  MorePressedIcon,
  CalendarIcon,
  SearchIcon,
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
    // Fix type issue: ensure 'color' has correct type for index
    return (
      <Pressable onPress={onPress}>
        <SVGIcon
          color={colors[color as keyof typeof colors] as ThemeColors}
          size={size}
        />
      </Pressable>
    );
  }
  return (
    <SVGIcon
      color={colors[color as keyof typeof colors] as ThemeColors}
      size={size}
    />
  );
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
  analysis: AnalysisIcon,
  analysisFill: AnalysisFillIcon,
  category: CategoryIcon,
  categoryFill: CategoryFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  transaction: TransactionIcon,
  transactionFill: TransactionFillIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  carDefault: CarDefaultIcon,
  carPressed: CarPressedIcon,
  entertainmentDefault: EntertainmentDefaultIcon,
  entertainmentPressed: EntertainmentPressedIcon,
  foodDefault: FoodDefaultIcon,
  foodPressed: FoodPressedIcon,
  groceriesDefault: GroceriesDefaultIcon,
  groceriesPressed: GroceriesPressedIcon,
  giftDefault: GiftDefaultIcon,
  giftPressed: GiftPressedIcon,
  rentDefault: RentDefaultIcon,
  rentPressed: RentPressedIcon,
  medicineDefault: MedicineDefaultIcon,
  medicinePressed: MedicinePressedIcon,
  newHomeDefault: NewHomeDefaultIcon,
  newHomePressed: NewHomePressedIcon,
  moreDefault: MoreDefaultIcon,
  morePressed: MorePressedIcon,
  savingDefault: SavingDefaultIcon,
  savingPressed: SavingPressedIcon,
  travelDefault: TravelDefaultIcon,
  travelPressed: TravelPressedIcon,
  transportDefault: TransportDefaultIcon,
  transportPressed: TransportPressedIcon,
  weddingDefault: WeddingDefaultIcon,
  weddingPressed: WeddingPressedIcon,
  search: SearchIcon,
  calendar: CalendarIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
