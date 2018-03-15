import {ActionCreator} from '../models/ActionCreator';

export const createAction = <T extends string, F extends ActionCreator<T>>(creator: F) => creator;
