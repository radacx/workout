import { Uuid } from '../../_types/Uuid';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { TrainingSet } from '../../_types/data/TrainingSet';
import { FormIds } from '../../_types/navigation/FormIds';
import { UpdatedSession } from '../../_types/data/UpdatedSession';
import {
  TrainingLog_AddSession,
  TrainingLog_DeleteSession,
  TrainingLog_AddSessionExercise,
  TrainingLog_RemoveSessionExercise,
  TrainingLog_UpdateSessionExercise,
  TrainingLog_UpdateSession,
  TrainingLog_SetExerciseId,
  TrainingLog_SetSessionId,
  TrainingLog_AddTrainingSet,
  TrainingLog_RemoveTrainingSet,
  TrainingLog_UpdateTrainingSet,
} from '../constants/actionTypes';
import { createAction } from '../../_shared/utils/createAction';
import { SessionExercise } from '../../_types/data/SessionExercise';

export const addTrainingSession = createAction((session: TrainingSession) => ({
  type: TrainingLog_AddSession,
  payload: { session },
}));

export const updateTrainingSession = createAction((session: UpdatedSession) => ({
  type: TrainingLog_UpdateSession,
  payload: { session },
}));

export const removeTrainingSession = createAction((id: Uuid) => ({
  type: TrainingLog_DeleteSession,
  payload: { id },
}));

export const addSessionExercise = createAction((
  sessionExercise: SessionExercise,
  formIds: FormIds,
) => ({
  type: TrainingLog_AddSessionExercise,
  payload: {
    sessionExercise,
    formIds,
  },
}));

export const updateSessionExercise = createAction((
  sessionExercise: SessionExercise,
  formIds: FormIds,
) => ({
  type: TrainingLog_UpdateSessionExercise,
  payload: {
    sessionExercise,
    formIds,
  },
}));

export const removeSessionExercise = createAction((id: Uuid, formIds: FormIds) => ({
  type: TrainingLog_RemoveSessionExercise,
  payload: {
    id,
    formIds,
  },
}));

export const addTrainingSet = createAction((
  trainingSet: TrainingSet,
  formIds: FormIds,
) => ({
  type: TrainingLog_AddTrainingSet,
  payload: {
    trainingSet,
    formIds,
  },
}));

export const updateTrainingSet = createAction((
  trainingSet: TrainingSet,
  formIds: FormIds,
) => ({
  type: TrainingLog_UpdateTrainingSet,
  payload: {
    trainingSet,
    formIds,
  },
}));

export const removeTrainingSet = createAction((id: Uuid, formIds: FormIds) => ({
  type: TrainingLog_RemoveTrainingSet,
  payload: { id, formIds },
}));

export const setSessionId = createAction((sessionId: Uuid) => ({
  type: TrainingLog_SetSessionId,
  payload: { sessionId },
}));

export const setExerciseId = createAction((exerciseId: Uuid) => ({
  type: TrainingLog_SetExerciseId,
  payload: { exerciseId },
}));
