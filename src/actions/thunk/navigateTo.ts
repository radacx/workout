import { Dispatch } from 'react-redux';
import { IThunkAction } from '../../models/interfaces/IThunkAction';

export const navigateTo: IThunkAction<string> =
  (screen: string) =>
    (dispatch: Dispatch<any>) =>
      undefined;
