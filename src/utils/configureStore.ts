import { reducers } from '../reducers';
import {
  createStore,
  applyMiddleware,
  Action,
  MiddlewareAPI,
  Middleware,
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
import thunk, { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react-redux';

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

console.log(logger);

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    undefined,
    composeEnhancers(
      applyMiddleware(
        actionToPlainObject,
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
