import { Navigation } from 'react-native-navigation';
import {
  Provider,
  Store,
} from 'react-redux';
import { IAppState } from './models/state/IAppState';
import { configureStoreForWixNavigation } from './utils/configureStore';
import { registerScreens } from './components/screens/utils/registerScreens';
import { AddNewTrainingSession } from './containers/AddNewTrainingSession';
import { TrainingLog } from './components/screens/TrainingLog';

const storeCallback = (provider: any) =>
  (st: Store<IAppState>) => {
    registerScreens(
      st,
      provider,
      [
        TrainingLog,
        AddNewTrainingSession,
      ],
    );

    Navigation.startSingleScreenApp({
      screen: TrainingLog.NavigationProps,
    });
  };

export const startApp = () => {
  configureStoreForWixNavigation(storeCallback(Provider));
};
