import { reducers } from '../reducers';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistConfig } from 'redux-persist/es/types';
import { autoMergeLevel2 } from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = composeWithDevTools({});

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    undefined,
    composeEnhancers(
      applyMiddleware(
        thunk,
        logger,
      ),
    ),
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
