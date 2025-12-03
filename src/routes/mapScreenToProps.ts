import { IconProps } from '@components';
import { AppBottomTabParamList } from './AppTabNavigation';

export const mapScreenToProps: Record<
  keyof AppBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  AppAnalysisStack: {
    label: 'Análise',
    icon: {
      focused: 'analysisFill',
      unfocused: 'analysis',
    },
  },

  TransactionScreen: {
    label: 'Transações',
    icon: {
      focused: 'transactionFill',
      unfocused: 'transaction',
    },
  },
  AppCategoryStack: {
    label: 'Categorias',
    icon: {
      focused: 'categoryFill',
      unfocused: 'category',
    },
  },

  AppProfileStack: {
    label: 'Perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
