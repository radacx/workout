import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import {
  AddSessionExercise,
  AddTrainingSession,
  AddTrainingSet,
} from '../../models/actions/actions';
import {
  assign,
  assignWithGet,
} from '../../utils/assign';

type State = IHomogenousObject<ITrainingSession>;
type Actions = AddTrainingSession | AddSessionExercise | AddTrainingSet;

const initialState: State = {};

const addTrainingSession = (state: State, { payload: { session } }: AddTrainingSession): State =>
  assign(
    state,
    st => {
      st[session.id] = session;
      return st;
    }
  );

const addSessionExercise = (state: State, { payload: { zanorenie, sessionExercise } }: AddSessionExercise): State =>
  assignWithGet(
    state,
    (st, zan) => st[ zan.sessionId ].exercises,
    exercises => {
      exercises[ sessionExercise.id ] = sessionExercise;
      return exercises;
    },
    zanorenie,
  );

const addTrainingSet = (state: State, { payload: { zanorenie, trainingSet } }: AddTrainingSet): State =>
  assignWithGet(
    state,
    (st, zan) => st[zan.sessionId].exercises[zan.exerciseId].sets,
    sets => {
      sets[ trainingSet.id ] = trainingSet;
      return sets;
    },
    zanorenie,
  );

export const sessions = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SESSION_ADDED':
      return addTrainingSession(state, action);
    case 'SESSION_EXERCISE_ADDED':
      return addSessionExercise(state, action);
    case 'TRAINING_SET_ADDED':
      return addTrainingSet(state, action);
    default:
      return state;
  }
};
