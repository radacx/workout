import { IFormIds } from '../../models/interfaces/IFormIds';
import {
  AddTrainingSession,
  SetExerciseId,
  SetSessionId,
} from '../../models/actions/actions';
import {
  SESSION_ADDED,
  SET_EXERCISE_ID,
  SET_SESSION_ID,
} from '../../constants/actionTypes';

type State = IFormIds;

type Actions = SetSessionId | SetExerciseId | AddTrainingSession;

const initialState: IFormIds = {
  session: '',
  exercise: '',
};

const setSessionId = (state: State, { payload: { sessionId } }: SetSessionId): State =>
  ({
    ...state,
    session: sessionId,
  });

const addSession = (state: State, { payload: { session: { id } } }: AddTrainingSession): State =>
  ({
    ...state,
    session: id,
  });

const setExerciseId = (state: State, { payload: { exerciseId } }: SetExerciseId): State =>
  ({
    ...state,
    exercise: exerciseId,
  });

export const formIds = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case SET_SESSION_ID:
      return setSessionId(state, action);
    case SET_EXERCISE_ID:
      return setExerciseId(state, action);
    case SESSION_ADDED:
      return addSession(state, action);
    default:
      return state;
  }
};
