import { ThunkAction as ReduxThunkAction } from 'redux-thunk';
import { AppState } from './AppState';
import { Action } from './Action';

export interface ThunkAction<TActionParams> {
  (params: TActionParams): ReduxThunkAction<Promise<Action> | Action, AppState, {}>;
}

export interface ThunkActionWithoutParams {
  (): ReduxThunkAction<Promise<Action> | Action, AppState, {}>;
}
