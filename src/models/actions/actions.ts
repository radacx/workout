import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
  SESSION_ADDED,
  SESSION_EXERCISE_ADDED,
  SESSION_UPDATED,
  SET_EXERCISE_ID,
  SET_SESSION_ID,
  TRAINING_SET_ADDED,
} from '../../constants/actionTypes';
import { Guid } from '../Guid';
import {
  ISessionExercise,
  ITrainingSession,
} from '../interfaces/ITrainingSession';
import { TrainingSet } from '../TrainingSet';
import { IFormIds } from '../interfaces/IFormIds';
import { IUpdatedSession } from '../interfaces/IUpdatedSession';
import { Exercise } from '../Exercise';

export class AddExerciseAction {
  readonly type = EXERCISE_ADDED;
  constructor (public payload: {
    exercise: Exercise,
  }) {}
}

export class UpdateExerciseAction {
  readonly type = EXERCISE_UPDATED;
  constructor (public payload: {
    exercise: Exercise,
  }) {}
}

export class RemoveExerciseAction {
  readonly type = EXERCISE_REMOVED;
  constructor (public payload: {
    id: Guid,
  }) {}
}

export class AddTrainingSession {
  readonly type = SESSION_ADDED;
  constructor (public payload: {
    session: ITrainingSession,
  }) {}
}

export class UpdateTrainingSession {
  readonly type = SESSION_UPDATED;
  constructor (public payload: {
    session: IUpdatedSession,
  }) {}
}

export class AddSessionExercise {
  readonly type = SESSION_EXERCISE_ADDED;
  constructor (public payload: {
    sessionExercise: ISessionExercise,
    formIds: IFormIds,
  }) {}
}

export class AddTrainingSet {
  readonly type = TRAINING_SET_ADDED;
  constructor (public payload: {
    trainingSet: TrainingSet,
    formIds: IFormIds,
  }) {}
}

export class SetSessionId {
  readonly type = SET_SESSION_ID;
  constructor (public payload: {
    sessionId: Guid,
  }) {}
}

export class SetExerciseId {
  readonly type = SET_EXERCISE_ID;
  constructor (public payload: {
    exerciseId: Guid,
  }) {}
}
