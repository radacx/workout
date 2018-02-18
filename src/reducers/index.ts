import { exercises } from './exercises/exercises';
import { combineReducers } from '../utils/combineReducers';
import { IAppState } from '../models/state/IAppState';

export const reducers = combineReducers<IAppState>({
  exercises,
  sessions: (state = {}, _) => state,
});
