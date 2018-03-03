/*import * as React from 'react';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
 import { configureStore } from './utils/configureStore';
 import { Loader } from './components/Loader';
 import { AppNavigation } from './components/RootStack';

 const {
 store,
 persistor,
 } = configureStore();

 export default class App extends React.PureComponent {
 render() {
 return (
 <Provider store={store}>
 <PersistGate
 persistor={persistor}
 loading={<Loader />}
 >
 <AppNavigation />
 </PersistGate>
 </Provider>
 );
 }
 }*/

import { Navigation } from 'react-native-navigation';
import {
  Provider,
  Store,
} from 'react-redux';
import { IAppState } from './models/state/IAppState';
import { configureStoreForWixNavigation } from './utils/configureStore';
import { registerScreens } from './components/screens/utils/registerScreens';
import { AddNewTrainingSession } from './components/screens/AddNewTrainingSession';
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
