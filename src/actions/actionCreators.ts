import { Guid } from '../models/Guid';
import {
  ISessionExercise,
  ITrainingSession,
} from '../models/interfaces/ITrainingSession';
import { TrainingSet } from '../models/TrainingSet';
import { IFormIds } from '../models/interfaces/IFormIds';
import { IUpdatedSession } from '../models/interfaces/IUpdatedSession';
import { Exercise } from '../models/Exercise';
import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
  SESSION_ADDED,
  SESSION_DELETED,
  SESSION_EXERCISE_ADDED,
  SESSION_EXERCISE_REMOVED,
  SESSION_EXERCISE_UPDATED,
  SESSION_UPDATED,
  SET_EXERCISE_ID,
  SET_SESSION_ID,
  TRAINING_SET_ADDED,
  TRAINING_SET_REMOVED,
  TRAINING_SET_UPDATED,
} from '../constants/actionTypes';
import {createAction} from '../utils/createAction';

export const addExercise = createAction((exercise: Exercise) => ({
  type: EXERCISE_ADDED,
  payload: {
    exercise,
  },
}));

export const updateExercise = createAction((exercise: Exercise) => ({
  type: EXERCISE_UPDATED,
  payload: {
    exercise,
  },
}));

export const removeExercise = createAction((id: Guid) => ({
  type: EXERCISE_REMOVED,
  payload: {
    id
  },
}));

export const addTrainingSession = createAction((session: ITrainingSession) => ({
  type: SESSION_ADDED,
  payload: {
    session,
  },
}));

export const updateTrainingSession = createAction((session: IUpdatedSession) => ({
  type: SESSION_UPDATED,
  payload: {
    session,
  },
}));

export const removeTrainingSession = createAction((id: Guid) => ({
  type: SESSION_DELETED,
  payload: {
    id,
  },
}));

export const addSessionExercise = createAction((sessionExercise: ISessionExercise, formIds: IFormIds) => ({
  type: SESSION_EXERCISE_ADDED,
  payload: {
    sessionExercise,
    formIds,
  }
}));

export const updateSessionExercise = createAction((sessionExercise: ISessionExercise, formIds: IFormIds) => ({
  type: SESSION_EXERCISE_UPDATED,
  payload: {
    sessionExercise,
    formIds,
  },
}));

export const removeSessionExercise = createAction((id: Guid, formIds: IFormIds) => ({
  type: SESSION_EXERCISE_REMOVED,
  payload: {
    id,
    formIds,
  },
}));

export const addTrainingSet = createAction((trainingSet: TrainingSet, formIds: IFormIds) => ({
  type: TRAINING_SET_ADDED,
  payload: {
    trainingSet,
    formIds,
  },
}));

export const updateTrainingSet = createAction((trainingSet: TrainingSet, formIds: IFormIds) => ({
  type: TRAINING_SET_UPDATED,
  payload: {
    trainingSet,
    formIds,
  },
}));

export const removeTrainingSet = createAction((id: Guid, formIds: IFormIds) => ({
  type: TRAINING_SET_REMOVED,
  payload: {
    id,
    formIds,
  },
}));

export const setSessionId = createAction((sessionId: Guid) => ({
  type: SET_SESSION_ID,
  payload: {
    sessionId,
  },
}));

export const setExerciseId = createAction((exerciseId: Guid) => ({
  type: SET_EXERCISE_ID,
  payload: {
    exerciseId,
  },
}));
