import { Navigation } from 'react-native-navigation';
import {
  Provider,
  Store,
} from 'react-redux';
import { IAppState } from './models/state/IAppState';
import { configureStoreForWixNavigation } from './utils/configureStore';
import { registerScreens } from './components/screens/utils/registerScreens';
import { componentsWithNavigationProps } from './utils/componentsWithNavigationProps';

const storeCallback = (provider: any) =>
  (st: Store<IAppState>) => {
    registerScreens(
      st,
      provider,
      componentsWithNavigationProps,
    );

    Navigation.startSingleScreenApp({
      screen: componentsWithNavigationProps.TrainingLog.navigationProps,
    });
  };

export const startApp = () => {
  configureStoreForWixNavigation(storeCallback(Provider));
};
