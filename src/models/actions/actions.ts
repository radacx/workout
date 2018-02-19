import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';
import { IExercise } from '../interfaces/IExercise';
import { Guid } from '../Guid';

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

type actions = [
  AddExerciseAction,
  UpdateExerciseAction,
  RemoveExerciseAction
];

export type AppAction = actions[number];
