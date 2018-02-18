import { exercises } from './exercises/exercises';
import { combineReducers } from '../utils/combineReducers';
import { IAppState } from '../models/state/IAppState';
import { sessions } from './sessions/sessions';

export const reducers = combineReducers<IAppState>({
  exercises,
  sessions,
});
