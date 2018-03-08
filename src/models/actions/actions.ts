import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
  SESSION_ADDED,
  SESSION_EXERCISE_ADDED,
  TRAINING_SET_ADDED,
} from '../../constants/actionTypes';
import { IExercise } from '../interfaces/IExercise';
import { Guid } from '../Guid';
import {
  ISessionExercise,
  ITrainingSession,
} from '../interfaces/ITrainingSession';
import { Zanorenie } from '../interfaces/With';
import { TrainingSet } from '../TrainingSet';

export class AddExerciseAction {
  readonly type = EXERCISE_ADDED;
  constructor (public payload: {
    exercise: IExercise,
  }) {}
}

export class UpdateExerciseAction {
  readonly type = EXERCISE_UPDATED;
  constructor (public payload: {
    exercise: IExercise,
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

export class AddSessionExercise {
  readonly type = SESSION_EXERCISE_ADDED;
  constructor (public payload: {
    sessionExercise: ISessionExercise,
    zanorenie: Zanorenie,
  }) {}
}

export class AddTrainingSet {
  readonly type = TRAINING_SET_ADDED;
  constructor (public payload: {
    trainingSet: TrainingSet,
    zanorenie: Zanorenie,
  }) {}
}

type actions = [
  AddExerciseAction,
  UpdateExerciseAction,
  RemoveExerciseAction
];

export type AppAction = actions[number];
