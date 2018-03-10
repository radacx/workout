import { Navigation } from 'react-native-navigation';
import {
  Provider,
  Store,
} from 'react-redux';
import { IAppState } from './models/state/IAppState';
import { configureStoreForWixNavigation } from './utils/configureStore';
import { registerScreens } from './components/screens/registerScreens';
import { componentsWithNavigationProps } from './utils/componentsWithNavigationProps';

const storeCallback = (provider: any) =>
  (st: Store<IAppState>) => {
    registerScreens(
      st,
      provider,
      componentsWithNavigationProps,
    );

    /*Navigation.startSingleScreenApp({
      screen: componentsWithNavigationProps.TrainingLog.navigationProps,
    });*/
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
