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
  //  persistStore,
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

/*const reduxSubscribers = new Map();

export const createReactNavigationReduxMiddleware = <State extends IAppState>(
  key: string,
  navStateSelector: (state: State) => NavigationState,
): Middleware => {
  reduxSubscribers.set(key, new Set());

  return (store: MiddlewareAPI<any>) => next => (action: any) => {
    const oldState = store.getState();
    const result = next(action);
    const newState = store.getState();
    const subscribers = reduxSubscribers.get(key);

    invariant(subscribers, `subscribers set should exist for ${key}`);

    subscribers.forEach((subscriber: any) =>
      subscriber({
        type: 'action',
        action,
        state: navStateSelector(newState),
        lastState: navStateSelector(oldState),
      })
    );
    return result;
  };
};

export const createReduxBoundAddListener = (key: string) => {
  invariant(
    reduxSubscribers.has(key),
    'Cannot listen for a key=' + key + ' that isn\'t associated with a Redux store.' +
    'First call `createReactNavigationReduxMiddleware` so that we know ' +
    'when to trigger your listener.'
  );
  return (eventName: string, handler: any) => {
    if (eventName !== 'action') {
      return { remove: () => undefined };
    }
    const subscribers = reduxSubscribers.get(key);
    invariant(subscribers, `subscribers set should exist for ${key}`);
    subscribers.add(handler);
    return {
      remove: () => {
        subscribers.delete(handler);
      },
    };
  };
};

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const addListener = createReduxBoundAddListener('root');

*/

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

  return {
    store,
    persistor,
  };
};
