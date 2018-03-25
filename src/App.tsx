import { Navigation } from 'react-native-navigation';
import {
  Provider,
  Store,
} from 'react-redux';
import { AppState } from './models/state/AppState';
import { configureStoreForWixNavigation } from './utils/configureStore';
import { registerScreens } from './utils/registerScreens';
import { componentsWithNavigationProps } from './utils/componentsWithNavigationProps';

const storeCallback = (provider: any) =>
  (st: Store<AppState>) => {
    registerScreens(
      st,
      provider,
      componentsWithNavigationProps,
    );

    Navigation.startTabBasedApp({
      tabs: [
        {
          ...componentsWithNavigationProps.TrainingLog.navigationProps,
          label: 'Training log',
          icon: require('./img/home.png'),
        },
        {
          ...componentsWithNavigationProps.ExercisesList.navigationProps,
          label: 'Exercises',
          icon: require('./img/home.png'),
        },
      ],
    });
  };

export const startApp = () => {
  configureStoreForWixNavigation(storeCallback(Provider));
};
