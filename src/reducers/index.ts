import { exercises } from './exercises/exercises';
import { combineReducers } from '../utils/combineReducers';
import { AppState } from '../models/state/AppState';
import { sessions } from './sessions/sessions';
import { formIds } from './formIds/formIds';

export const reducers = combineReducers<AppState>({
  exercises,
  sessions,
  formIds,
});
