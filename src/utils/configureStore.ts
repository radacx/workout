import { reducers } from '../reducers';
import {
  createStore,
  applyMiddleware,
  Action,
  MiddlewareAPI,
  Middleware,
  Store,
} from 'redux';
import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistConfig } from 'redux-persist/es/types';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {
  default as thunk,
  ThunkAction,
} from 'redux-thunk';
import { Dispatch } from 'react-redux';
import { persistStore } from 'redux-persist';

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = composeWithDevTools({});

const actionToPlainObject: Middleware =
  <S>(api: MiddlewareAPI<S>) =>
    (next: Dispatch<S>) =>
      (action: ThunkAction<Action, S, {}> | Action) => {
        if (typeof action === 'function') {
          return action(api.dispatch, api.getState, {});
        }

        return next({
          ...action,
        });
      };

export const configureStoreForWixNavigation = (callback: (store: Store<any>) => void) => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        actionToPlainObject,
      ),
    ),
  );

  const persistor = persistStore(store, undefined, () => callback(store));

  return {
    store,
    persistor,
  };
};

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        actionToPlainObject,
        thunk,
      ),
    ),
  );

  const persistor = persistStore(store);
  persistor.purge();
  return {
    store,
    persistor,
  };
};
