import { IconProps, Option } from '@components';

export type DefaultCategories =
  | 'food'
  | 'transport'
  | 'medicine'
  | 'groceries'
  | 'rent'
  | 'gift'
  | 'saving'
  | 'entertainment'
  | 'more';

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
