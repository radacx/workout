import { Guid } from '../models/Guid';
import { TrainingSession } from '../models/data/TrainingSession';
import { TrainingSet } from '../models/data/TrainingSet';
import { FormIds } from '../models/navigation/FormIds';
import { UpdatedSession } from '../models/data/UpdatedSession';
import { Exercise } from '../models/data/Exercise';
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
import { createAction } from '../utils/createAction';
import { SessionExercise } from '../models/data/SessionExercise';

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
    id,
  },
}));

export const addTrainingSession = createAction((session: TrainingSession) => ({
  type: SESSION_ADDED,
  payload: {
    session,
  },
}));

export const updateTrainingSession = createAction((session: UpdatedSession) => ({
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

export const addSessionExercise = createAction((
  sessionExercise: SessionExercise,
  formIds: FormIds,
) => ({
  type: SESSION_EXERCISE_ADDED,
  payload: {
    sessionExercise,
    formIds,
  },
}));

export const updateSessionExercise = createAction((
  sessionExercise: SessionExercise,
  formIds: FormIds,
) => ({
  type: SESSION_EXERCISE_UPDATED,
  payload: {
    sessionExercise,
    formIds,
  },
}));

export const removeSessionExercise = createAction((
  id: Guid,
  formIds: FormIds,
) => ({
  type: SESSION_EXERCISE_REMOVED,
  payload: {
    id,
    formIds,
  },
}));

export const addTrainingSet = createAction((
  trainingSet: TrainingSet,
  formIds: FormIds,
) => ({
  type: TRAINING_SET_ADDED,
  payload: {
    trainingSet,
    formIds,
  },
}));

export const updateTrainingSet = createAction((
  trainingSet: TrainingSet,
  formIds: FormIds,
) => ({
  type: TRAINING_SET_UPDATED,
  payload: {
    trainingSet,
    formIds,
  },
}));

export const removeTrainingSet = createAction((
  id: Guid,
  formIds: FormIds,
) => ({
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
