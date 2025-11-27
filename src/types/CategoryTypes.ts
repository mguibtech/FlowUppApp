import { IconProps, Option } from '@components';

export type CategoryType =
  | 'food'
  | 'transport'
  | 'groceries'
  | 'rent'
  | 'gift'
  | 'medicine'
  | 'entertainment'
  | 'saving'
  | 'more'
  | 'travel'
  | 'newHome'
  | 'car'
  | 'wedding';

export const categoryIconName: Record<CategoryType, IconProps['name']> = {
  food: 'foodDefault',
  wedding: 'weddingDefault',
  car: 'carDefault',
  newHome: 'newHomeDefault',
  travel: 'travelDefault',
  more: 'moreDefault',
  saving: 'savingDefault',
  entertainment: 'entertainmentDefault',
  medicine: 'medicineDefault',
  gift: 'giftDefault',
  rent: 'rentDefault',
  groceries: 'groceriesDefault',
  transport: 'transportDefault',
};
