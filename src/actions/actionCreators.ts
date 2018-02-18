import { EXERCISE_ADDED } from '../constants/actionTypes';
import { IExercise } from '../models/interfaces/IExercise';

export const addExercise = (exercise: IExercise) => ({
  type: EXERCISE_ADDED,
  payload: {
    exercise,
  },
});
