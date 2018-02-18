import { IExercise } from '../models/interfaces/IExercise';
import {
  AddExerciseAction,
  UpdateExerciseAction,
} from '../models/actions/actions';

export const addExercise = (exercise: IExercise) =>
  new AddExerciseAction({
    exercise,
  });

export const updateExercise = (exercise: IExercise) =>
  new UpdateExerciseAction({
    exercise,
  });
