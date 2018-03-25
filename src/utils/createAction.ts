import { ActionCreator } from '../models/state/ActionCreator';

export const createAction = <T extends string, F extends ActionCreator<T>>(creator: F) => creator;
