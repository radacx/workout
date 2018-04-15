import { ActionCreator } from '../../_types/actions/ActionCreator';

export const createAction = <T extends string, F extends ActionCreator<T>>(creator: F) => creator;
