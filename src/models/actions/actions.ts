import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
  SESSION_ADDED,
} from '../../constants/actionTypes';
import { IExercise } from '../interfaces/IExercise';
import { Guid } from '../Guid';
import { ITrainingSession } from '../interfaces/ITrainingSession';

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

type actions = [
  AddExerciseAction,
  UpdateExerciseAction,
  RemoveExerciseAction
];

export type AppAction = actions[number];
