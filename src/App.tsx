import { Navigation } from 'react-native-navigation';
import {
  Provider,
  Store,
} from 'react-redux';
import { IStore } from './apps/_shared/store/IStore';
import { configureStoreForWixNavigation } from './apps/_shared/utils/configureStore';
import { registerScreens } from './navigation/registerScreens';
import { componentsWithNavigationProps } from './navigation/componentsWithNavigationProps';

const storeCallback = (provider: any) =>
  (store: Store<IStore>) => {
    registerScreens(
      store,
      provider,
      componentsWithNavigationProps,
    );

    Navigation.startTabBasedApp({
      tabs: [
        {
          ...componentsWithNavigationProps.TrainingLogApp.navigationProps,
          label: 'Training log',
          icon: require('./img/home.png'),
        },
        {
          ...componentsWithNavigationProps.ExercisesApp.navigationProps,
          label: 'Exercises',
          icon: require('./img/home.png'),
        },
        {
          ...componentsWithNavigationProps.AnalyticsApp.navigationProps,
          label: 'Statistics',
          icon: require('./img/home.png'),
        },
      ],
    });
  };

export const startApp = () => {
  configureStoreForWixNavigation(storeCallback(Provider));
};
