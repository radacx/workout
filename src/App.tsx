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
import { List } from './components/List';
import { NewExerciseForm } from './containers/NewExerciseForm';
import {
  Provider,
  Store,
} from 'react-redux';
import { IAppState } from './models/state/IAppState';
import {
  configureStore,
  configureStoreForWixNavigation,
} from './utils/configureStore';
import * as React from 'react';
import { Loader } from './components/Loader';
import { MultiSelect } from './components/MultiSelect';

interface Compos {
  [index: string]: React.ComponentType<any>;
}

const registerScreens = (st: Store<IAppState>, provider: any, screens: Compos) => {
  Object
    .keys(screens)
    .forEach(key =>
      Navigation.registerComponent(key, () => screens[key], st, provider)
    );
};

const s = (provider: any) =>
  (st: Store<IAppState>) => {
    registerScreens(st, provider, {
      List,
      NewExerciseForm,
      MultiSelect,
    });

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'List',
        title: 'List',
      },
    });
  };

export const startApp = () => {
  /*const store = configureStore().store;
  Navigation.registerComponent('List', () => List, store, Provider);*/

  Navigation.registerComponent('Loader', () => Loader);
  Navigation.showModal({
    screen: 'Loader',
  });
  configureStoreForWixNavigation(s(Provider));
};
