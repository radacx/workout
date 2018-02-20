import { exercises } from './exercises/exercises';
import { combineReducers } from '../utils/combineReducers';
import { IAppState } from '../models/state/IAppState';
import {
  initialState,
  Stack,
} from '../components/RootStack';

export const reducers = combineReducers<IAppState>({
  exercises,
  sessions: (state = {}, _) => state,
  nav: (state = initialState, action) => Stack.router.getStateForAction(action, state) || state,
});
