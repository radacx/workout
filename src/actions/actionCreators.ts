import { IExercise } from '../models/interfaces/IExercise';
import {
  AddExerciseAction,
  RemoveExerciseAction,
  UpdateExerciseAction,
} from '../models/actions/actions';
import { Guid } from '../models/Guid';

export const addExercise = (exercise: IExercise) =>
  new AddExerciseAction({
    exercise,
  });

export const updateExercise = (exercise: IExercise) =>
  new UpdateExerciseAction({
    exercise,
  });

export const removeExercise = (id: Guid) =>
  new RemoveExerciseAction({
    id,
  });
