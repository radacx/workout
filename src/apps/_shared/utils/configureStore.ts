import { reducer } from '../reducers/reducer';
import {
  createStore,
  applyMiddleware,
  Store,
} from 'redux';
import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistConfig } from 'redux-persist/es/types';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const composeEnhancers = composeWithDevTools({});

export const configureStoreForWixNavigation = (
  callback: (store: Store<any>) => void,
  clearStorage = false,
) => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  const persistor = persistStore(
    store,
    undefined,
    () => callback(store),
  );

  if (clearStorage) {
    persistor.purge();
  }

  return {
    store,
    persistor,
  };
};
