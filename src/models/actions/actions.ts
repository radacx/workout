import {
  EXERCISE_ADDED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';
import { IExercise } from '../interfaces/IExercise';

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

type actions = [
  AddExerciseAction,
  UpdateExerciseAction
];

export type AppAction = actions[number];
