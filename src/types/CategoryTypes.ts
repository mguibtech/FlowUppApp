import { IconProps } from '@components';

export type CategoryType =
  | 'wedding'
  | 'car'
  | 'newHome'
  | 'travel'
  | 'more'
  | 'saving'
  | 'entertainment'
  | 'food'
  | 'medicine'
  | 'gift'
  | 'rent'
  | 'groceries'
  | 'transport'
  | 'salary';

export const categoryIconName: Record<CategoryType, IconProps['name']> = {
  wedding: 'weddingDefault',
  car: 'carDefault',
  newHome: 'newHomeDefault',
  travel: 'travelDefault',
  more: 'moreDefault',
  saving: 'savingDefault',
  entertainment: 'entertainmentDefault',
  food: 'foodDefault',
  medicine: 'medicineDefault',
  gift: 'giftDefault',
  rent: 'rentDefault',
  groceries: 'groceriesDefault',
  transport: 'transportDefault',
  salary: 'carDefault',
};
