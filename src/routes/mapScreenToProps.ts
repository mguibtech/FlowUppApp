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
  AnalysisScreen: {
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
  CategoriesScreen: {
    label: 'Categorias',
    icon: {
      focused: 'categoryFill',
      unfocused: 'category',
    },
  },

  ProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
