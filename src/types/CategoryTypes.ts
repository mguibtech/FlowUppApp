import { IconProps } from '@components';

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

export const categoryIconName: Record<DefaultCategories, IconProps['name']> = {
  food: 'foodDefault',
  more: 'moreDefault',
  saving: 'savingDefault',
  entertainment: 'entertainmentDefault',
  medicine: 'medicineDefault',
  gift: 'giftDefault',
  rent: 'rentDefault',
  groceries: 'groceriesDefault',
  transport: 'transportDefault',
};
