import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import {
  AddSessionExercise,
  AddTrainingSession,
  AddTrainingSet,
  UpdateTrainingSession,
} from '../../models/actions/actions';
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

type State = IHomogenousObject<ITrainingSession>;
type Actions = AddTrainingSession | AddSessionExercise | AddTrainingSet | UpdateTrainingSession;

const initialState: State = {};

const addTrainingSession = (state: State, { payload: { session } }: AddTrainingSession): State =>
  assign(
    state,
    st => {
      st[session.id] = session;
      return st;
    }
  );

const updateTrainingSession = (state: State, { payload: { session: { id, bodyweight, date } } }: UpdateTrainingSession): State =>
  assignWithGet(
    state,
    st => st[id],
    sess => ({
      ...sess,
      bodyweight,
      date,
    }),
  );

const addSessionExercise = (state: State, { payload: { sessionExercise, formIds: { session } } }: AddSessionExercise): State =>
  assignWithGet(
    state,
    st => st[session].exercises,
    exercises => {
      exercises[ sessionExercise.id ] = sessionExercise;
      return exercises;
    },
  );

const addTrainingSet = (state: State, { payload: { trainingSet, formIds: { session, exercise } } }: AddTrainingSet): State =>
  assignWithGet(
    state,
    st => st[session].exercises[exercise].sets,
    sets => {
      sets[ trainingSet.id ] = trainingSet;
      return sets;
    },
  );

export const sessions = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case SESSION_ADDED:
      return addTrainingSession(state, action);
    case SESSION_UPDATED:
      return updateTrainingSession(state, action);
    case SESSION_EXERCISE_ADDED:
      return addSessionExercise(state, action);
    case TRAINING_SET_ADDED:
      return addTrainingSet(state, action);
    default:
      return state;
  }
};
