import { HomogenousObject } from '../../models/HomogenousObject';
import { Exercise } from '../../models/data/Exercise';
import {
  assign,
} from '../../utils/assign';
import {
  EXERCISE_ADDED,
  EXERCISE_REMOVED,
  EXERCISE_UPDATED,
} from '../../constants/actionTypes';
import {
  addExercise,
  removeExercise,
  updateExercise,
} from '../../actions/actionCreators';
import { Action } from '../../models/state/Action';

type State = Readonly<HomogenousObject<Exercise>>;

const add = (
  state: State,
  { payload: { exercise } }: ReturnType<typeof addExercise>,
): State =>
  assign(
    state,
    st => ({
      ...st,
      [ exercise.id ]: exercise,
    }),
  );

const update = (
  state: State,
  { payload: { exercise } }: ReturnType<typeof updateExercise>,
): State =>
  assign(
    state,
    st => ({
      ...st,
      [ exercise.id ]: exercise,
    }),
  );

const remove = (
  state: State,
  { payload: { id } }: ReturnType<typeof removeExercise>,
): State =>
  assign(
    state,
    st => {
      const temp = { ...st };
      delete temp[ id ];
      return temp;
    },
  );

import * as initialExercises from '../../constants/initialExercises';

const initialState = Object
  .keys(initialExercises)
  .map((k: any) => ((initialExercises as any)[ k ]) as Exercise)
  .reduce(
    (exs, exercise) => {
      exs[ exercise.id ] = exercise;
      return exs;
    },
    {} as HomogenousObject<Exercise>,
  );

export const exercises = (
  state: State = initialState,
  action: Action,
): State => {
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
