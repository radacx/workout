import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { IExercise } from '../../models/interfaces/IExercise';
import {
  assign,
} from '../../utils/assign';
import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';
import {addExercise, removeExercise, updateExercise} from '../../actions';
import {Action} from '../../models/Action';

type State = IHomogenousObject<IExercise>;

const add = (state: State, { payload: { exercise } }: ReturnType<typeof addExercise>): State =>
  assign(
    state,
    st => {
      st[exercise.id] = exercise;
      return st;
    }
  );

const update = (state: State, { payload: { exercise } }:  ReturnType<typeof updateExercise>): State =>
  assign(
    state,
    st => ({
        ...st,
        [ exercise.id ]: exercise,
      }),
  );

const remove = (state: State, { payload }:  ReturnType<typeof removeExercise>): State =>
  assign(
    state,
    st => {
      delete st[payload.id];
      return st;
    },
  );

const initialState: State = {};

export const exercises = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case EXERCISE_ADDED:
      return add(state, action);
    case EXERCISE_UPDATED:
      return update(state, action);
    case EXERCISE_REMOVED:
      return remove(state, action);

    default:
      return state;
  }
};
