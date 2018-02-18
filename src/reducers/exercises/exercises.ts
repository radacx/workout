import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { IExercise } from '../../models/interfaces/IExercise';
import {
  assign,
  assignWithGet,
} from '../../utils/assign';
import {
  AddExerciseAction,
  AppAction,
  UpdateExerciseAction,
} from '../../models/actions/actions';
import {
  EXERCISE_ADDED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';

type State = IHomogenousObject<IExercise>;

const addExercise = (state: State, { payload: { exercise } }: AddExerciseAction): State =>
  assign(
    state,
    st => {
      st[exercise.id] = exercise;
      return st;
    }
  );

const updateExercise = (state: State, _: UpdateExerciseAction): State =>
  assignWithGet(
    state,
    st => st[Object.keys(st)[5]],
    st => {
      console.log(st);
      st.name = 'HAHA';
      return st;
    }
  );

const initialState: State = {};


export const exercises = (state: State = initialState, action: AppAction): State => {
  switch (action.type) {
    case EXERCISE_ADDED:
      return addExercise(state, action);

    case EXERCISE_UPDATED:
      return updateExercise(state, action);

    default:
      return state;
  }
};
