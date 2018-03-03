import { ThunkAction } from 'redux-thunk';
import { IAppState } from '../state/IAppState';

interface IAction {
  type: string;
  payload: any;
}

export interface IThunkAction<TActionParams> {
  (params: TActionParams): ThunkAction<Promise<IAction> | IAction, IAppState, {}>;
}

export interface IThunkActionWithoutParams {
  (): ThunkAction<Promise<IAction> | IAction, IAppState, {}>;
}
