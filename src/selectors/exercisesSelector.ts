import { AppState } from '../models/state/AppState';

export const exercisesSelector = (state: AppState) =>
  state.exercises;
