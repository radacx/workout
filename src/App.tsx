import * as React from 'react';
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
}
