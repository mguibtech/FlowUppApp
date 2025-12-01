import { IconProps } from '@components';
import { DefaultCategories } from '@types';

export const mapCategoryToProps: Record<
  DefaultCategories,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  food: {
    label: 'Alimentação',
    icon: {
      focused: 'foodPressed',
      unfocused: 'foodDefault',
    },
  },
  transport: {
    label: 'Transporte',
    icon: {
      focused: 'transportPressed',
      unfocused: 'transportDefault',
    },
  },
  medicine: {
    label: 'Medicamento',
    icon: {
      focused: 'medicinePressed',
      unfocused: 'medicineDefault',
    },
  },
  groceries: {
    label: 'Mercado',
    icon: {
      focused: 'groceriesPressed',
      unfocused: 'groceriesDefault',
    },
  },
  rent: {
    label: 'Pagamentos',
    icon: {
      focused: 'rentPressed',
      unfocused: 'rentDefault',
    },
  },
  gift: {
    label: 'Presentes',
    icon: {
      focused: 'giftPressed',
      unfocused: 'giftDefault',
    },
  },
  saving: {
    label: 'Economias',
    icon: {
      focused: 'savingPressed',
      unfocused: 'savingDefault',
    },
  },
  entertainment: {
    label: 'Entretenimento',
    icon: {
      focused: 'entertainmentPressed',
      unfocused: 'entertainmentDefault',
    },
  },
  more: {
    label: 'Mais',
    icon: {
      focused: 'morePressed',
      unfocused: 'moreDefault',
    },
  },
};
