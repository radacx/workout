import {
  AddExerciseAction,
  AddSessionExercise,
  AddTrainingSession,
  AddTrainingSet,
  RemoveExerciseAction,
  SetExerciseId,
  SetSessionId,
  UpdateExerciseAction,
  UpdateTrainingSession,
} from '../models/actions/actions';
import { Guid } from '../models/Guid';
import {
  ISessionExercise,
  ITrainingSession,
} from '../models/interfaces/ITrainingSession';
import { TrainingSet } from '../models/TrainingSet';
import { IFormIds } from '../models/interfaces/IFormIds';
import { IUpdatedSession } from '../models/interfaces/IUpdatedSession';
import { Exercise } from '../models/Exercise';

export const addExercise = (exercise: Exercise) =>
  new AddExerciseAction({
    exercise,
  });

export const updateExercise = (exercise: Exercise) =>
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

export const updateTrainingSession = (session: IUpdatedSession) =>
  new UpdateTrainingSession({
    session,
  });

export const addSessionExercise = (sessionExercise: ISessionExercise, formIds: IFormIds) =>
  new AddSessionExercise({
    sessionExercise,
    formIds,
  });

export const addTraningSet = (trainingSet: TrainingSet, formIds: IFormIds) =>
  new AddTrainingSet({
    trainingSet,
    formIds,
  });

export const setSessionId = (sessionId: Guid) =>
  new SetSessionId({
    sessionId,
  });

export const setExerciseId = (exerciseId: Guid) =>
  new SetExerciseId({
    exerciseId,
  });
