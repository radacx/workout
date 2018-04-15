import { combineReducers } from '../../_shared/utils/combineReducers';
import { ExercisesAppStoreState } from '../store/ExercisesAppStoreState';
import { exercises } from './internalReducers/exercises';

export const exercisesApp = combineReducers<ExercisesAppStoreState>({
  exercises,
});
