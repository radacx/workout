import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { IExercise } from '../../models/interfaces/IExercise';
import {
  assign,
} from '../../utils/assign';
import {
  AddExerciseAction,
  RemoveExerciseAction,
  UpdateExerciseAction,
} from '../../models/actions/actions';
import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';

type State = IHomogenousObject<IExercise>;

type Actions = AddExerciseAction | UpdateExerciseAction | RemoveExerciseAction;

const addExercise = (state: State, { payload: { exercise } }: AddExerciseAction): State =>
  assign(
    state,
    st => {
      st[exercise.id] = exercise;
      return st;
    }
  );

const updateExercise = (state: State, { payload: { exercise } }: UpdateExerciseAction): State =>
  assign(
    state,
    st => ({
        ...st,
        [ exercise.id ]: exercise,
      }),
  );

const removeExercise = (state: State, { payload }: RemoveExerciseAction): State =>
  assign(
    state,
    st => {
      delete st[payload.id];
      return st;
    },
  );

const initialState: State = {};

export const exercises = (state: State = initialState, action: Actions): State => {
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
