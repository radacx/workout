import { IExercise } from '../models/interfaces/IExercise';
import {
  AddExerciseAction,
  AddTrainingSession,
  RemoveExerciseAction,
  UpdateExerciseAction,
} from '../models/actions/actions';
import { Guid } from '../models/Guid';
import { ITrainingSession } from '../models/interfaces/ITrainingSession';

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

export const addTrainingSession = (session: ITrainingSession) =>
  new AddTrainingSession({
    session,
  });
