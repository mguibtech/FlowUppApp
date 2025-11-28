import { IconProps } from '@components';
import { CategoryType } from '@types';

export const mapCategoryToProps: Record<
  CategoryType,
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
  wedding: {
    label: 'Casamento',
    icon: {
      focused: 'weddingPressed',
      unfocused: 'weddingDefault',
    },
  },
  car: {
    label: 'Carro',
    icon: {
      focused: 'carPressed',
      unfocused: 'carDefault',
    },
  },
  newHome: {
    label: 'Nova Casa',
    icon: {
      focused: 'newHomePressed',
      unfocused: 'newHomeDefault',
    },
  },
  travel: {
    label: 'Viagem',
    icon: {
      focused: 'travelPressed',
      unfocused: 'travelDefault',
    },
  },
  more: {
    label: 'Mais',
    icon: {
      focused: 'morePressed',
      unfocused: 'moreDefault',
    },
  },
  saving: {
    label: 'Economia',
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
  medicine: {
    label: 'Medicamento',
    icon: {
      focused: 'medicinePressed',
      unfocused: 'medicineDefault',
    },
  },
  gift: {
    label: 'Presente',
    icon: {
      focused: 'giftPressed',
      unfocused: 'giftDefault',
    },
  },
  rent: {
    label: 'Aluguel',
    icon: {
      focused: 'rentPressed',
      unfocused: 'rentDefault',
    },
  },
  groceries: {
    label: 'Compras',
    icon: {
      focused: 'groceriesPressed',
      unfocused: 'groceriesDefault',
    },
  },
  transport: {
    label: 'Transporte',
    icon: {
      focused: 'transportPressed',
      unfocused: 'transportDefault',
    },
  },
};
