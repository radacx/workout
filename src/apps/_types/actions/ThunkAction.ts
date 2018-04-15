import { ThunkAction as ReduxThunkAction } from 'redux-thunk';
import { IStore } from '../../_shared/store/IStore';

export type ThunkAction<TActionParams, TAction> = {
  (params: TActionParams): ReduxThunkAction<Promise<TAction> | TAction, IStore, {}>;
};

export type ThunkActionWithoutParams<TAction> = {
  (): ReduxThunkAction<Promise<TAction> | TAction, IStore, {}>;
};
