import { HomogenousObject } from '../../models/HomogenousObject';
import { TrainingSession } from '../../models/data/TrainingSession';
import {
  assign,
  assignWithGet,
} from '../../utils/assign';
import {
  SESSION_ADDED,
  SESSION_DELETED,
  SESSION_EXERCISE_ADDED,
  SESSION_EXERCISE_REMOVED,
  SESSION_EXERCISE_UPDATED,
  SESSION_UPDATED,
  TRAINING_SET_ADDED,
  TRAINING_SET_REMOVED,
  TRAINING_SET_UPDATED,
} from '../../constants/actionTypes';
import { Action } from '../../models/state/Action';
import {
  addSessionExercise,
  addTrainingSession,
  addTrainingSet,
  removeSessionExercise,
  removeTrainingSession,
  removeTrainingSet,
  updateSessionExercise,
  updateTrainingSession,
  updateTrainingSet,
} from '../../actions/actionCreators';

type State = Readonly<HomogenousObject<TrainingSession>>;

const initialState: State = {};

const addTrainingSessionReducer = (
  state: State,
  { payload: { session } }: ReturnType<typeof addTrainingSession>,
): State =>
  assign(
    state,
    st => ({
      ...st,
      [ session.id ]: session,
    }),
  );

const removeTrainingSessionReducer = (
  state: State,
  { payload: { id } }: ReturnType<typeof removeTrainingSession>,
): State =>
  assign(
    state,
    st => {
      const temp = { ...st };
      delete temp[ id ];
      return temp;
    },
  );

const updateTrainingSessionReducer = (
  state: State,
  { payload: { session: { id, bodyweight, date } } }: ReturnType<typeof updateTrainingSession>,
): State =>
  assignWithGet(
    state,
    st => st[ id ],
    sess => ({
      ...sess,
      bodyweight,
      date,
    }),
  );

const removeSessionExerciseReducer = (
  state: State,
  { payload: { id, formIds } }: ReturnType<typeof removeSessionExercise>,
): State =>
  assignWithGet(
    state,
    st => st[ formIds.session ].exercises,
    exs => {
      delete exs[ id ];
      return exs;
    },
  );

const updateSessionExerciseReducer = (
  state: State,
  { payload: { formIds, sessionExercise } }: ReturnType<typeof updateSessionExercise>,
): State =>
  assignWithGet(
    state,
    st => st[ formIds.session ].exercises,
    exs => {
      exs[ sessionExercise.id ] = sessionExercise;
      return exs;
    },
  );

const addSessionExerciseReducer = (
  state: State,
  { payload: { sessionExercise, formIds: { session } } }: ReturnType<typeof addSessionExercise>,
): State =>
  assignWithGet(
    state,
    st => st[ session ].exercises,
    exercises => {
      exercises[ sessionExercise.id ] = sessionExercise;
      return exercises;
    },
  );

const removeTrainingSetReducer = (
  state: State,
  { payload: { id, formIds } }: ReturnType<typeof removeTrainingSet>,
): State =>
  assignWithGet(
    state,
    st => st[ formIds.session ].exercises[ formIds.exercise ].sets,
    sts => {
      delete sts[ id ];
      return sts;
    },
  );

const updateTrainingSetReducer = (
  state: State,
  { payload: { formIds, trainingSet } }: ReturnType<typeof updateTrainingSet>,
): State =>
  assignWithGet(
    state,
    st => st[ formIds.session ].exercises[ formIds.exercise ],
    ex => {
      ex.sets[ trainingSet.id ] = trainingSet;
      return ex;
    },
  );

const addTrainingSetReducer = (
  state: State,
  { payload: { trainingSet, formIds: { session, exercise } } }: ReturnType<typeof addTrainingSet>,
): State =>
  assignWithGet(
    state,
    st => st[ session ].exercises[ exercise ].sets,
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
    case SESSION_DELETED:
      return removeTrainingSessionReducer(state, action);

    case SESSION_EXERCISE_ADDED:
      return addSessionExerciseReducer(state, action);
    case SESSION_EXERCISE_UPDATED:
      return updateSessionExerciseReducer(state, action);
    case SESSION_EXERCISE_REMOVED:
      return removeSessionExerciseReducer(state, action);

    case TRAINING_SET_ADDED:
      return addTrainingSetReducer(state, action);
    case TRAINING_SET_UPDATED:
      return updateTrainingSetReducer(state, action);
    case TRAINING_SET_REMOVED:
      return removeTrainingSetReducer(state, action);
    default:
      return state;
  }
};
