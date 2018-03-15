import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import {
  assign,
  assignWithGet,
} from '../../utils/assign';
import {
  SESSION_ADDED,
  SESSION_EXERCISE_ADDED,
  SESSION_UPDATED,
  TRAINING_SET_ADDED,
} from '../../constants/actionTypes';
import {Action} from '../../models/Action';
import {addSessionExercise, addTrainingSession, addTrainingSet, updateTrainingSession} from '../../actions';

type State = IHomogenousObject<ITrainingSession>;

const initialState: State = {};

const addTrainingSessionReducer = (state: State, { payload: { session } }: ReturnType<typeof addTrainingSession>): State =>
  assign(
    state,
    st => {
      st[session.id] = session;
      return st;
    }
  );

const updateTrainingSessionReducer = (state: State, { payload: { session: { id, bodyweight, date } } }: ReturnType<typeof updateTrainingSession>): State =>
  assignWithGet(
    state,
    st => st[id],
    sess => ({
      ...sess,
      bodyweight,
      date,
    }),
  );

const addSessionExerciseReducer = (state: State, { payload: { sessionExercise, formIds: { session } } }: ReturnType<typeof addSessionExercise>): State =>
  assignWithGet(
    state,
    st => st[session].exercises,
    exercises => {
      exercises[ sessionExercise.id ] = sessionExercise;
      return exercises;
    },
  );

const addTrainingSetReducer = (state: State, { payload: { trainingSet, formIds: { session, exercise } } }: ReturnType<typeof addTrainingSet>): State =>
  assignWithGet(
    state,
    st => st[session].exercises[exercise].sets,
    sets => {
      sets[ trainingSet.id ] = trainingSet;
      return sets;
    },
  );

export const sessions = (state = initialState, action: Action): State => {
  switch (action.type) {
    case SESSION_ADDED:
      return addTrainingSessionReducer(state, action);
    case SESSION_UPDATED:
      return updateTrainingSessionReducer(state, action);
    case SESSION_EXERCISE_ADDED:
      return addSessionExerciseReducer(state, action);
    case TRAINING_SET_ADDED:
      return addTrainingSetReducer(state, action);
    default:
      return state;
  }
};
