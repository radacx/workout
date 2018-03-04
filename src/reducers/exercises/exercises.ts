import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { IExercise } from '../../models/interfaces/IExercise';
import {
  assign,
  assignWithGet,
} from '../../utils/assign';
import {
  AddExerciseAction,
  AppAction,
  RemoveExerciseAction,
  UpdateExerciseAction,
} from '../../models/actions/actions';
import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';
import { ExerciseType } from '../../models/enums/ExerciseType';

type State = IHomogenousObject<IExercise>;

const addExercise = (state: State, { payload: { exercise } }: AddExerciseAction): State =>
  assign(
    state,
    st => {
      st[exercise.id] = exercise;
      return st;
    }
  );

const updateExercise = (state: State, { payload }: UpdateExerciseAction): State =>
  assignWithGet(
    state,
    (st, id) => st[id],
    () => payload.exercise,
    payload.exercise.id,
  );

const removeExercise = (state: State, { payload }: RemoveExerciseAction): State =>
  assign(
    state,
    st => {
      delete st[payload.id];
      return st;
    },
  );

//  const initialState: State = {};
const initialState: State = {
  '1': {
    name: 'Exercise 1',
    id: '1',
    primaryMuscleGroups: [],
    exerciseType: ExerciseType.Reps,
    planesOfMovement: [],
    secondaryMuscleGroups: [],
  },
  '2': {
    name: 'Exercise 2',
    id: '2',
    primaryMuscleGroups: [],
    exerciseType: ExerciseType.Duration,
    planesOfMovement: [],
    secondaryMuscleGroups: [],
  },
};

export const exercises = (state: State = initialState, action: AppAction): State => {
  switch (action.type) {
    case EXERCISE_ADDED:
      return addExercise(state, action);
    case EXERCISE_UPDATED:
      return updateExercise(state, action);
    case EXERCISE_REMOVED:
      return removeExercise(state, action);

    default:
      return state;
  }
};
