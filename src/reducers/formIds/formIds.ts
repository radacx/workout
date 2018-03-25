import { FormIds } from '../../models/navigation/FormIds';
import {
  SESSION_ADDED,
  SET_EXERCISE_ID,
  SET_SESSION_ID,
} from '../../constants/actionTypes';
import { Action } from '../../models/state/Action';
import {
  addTrainingSession,
  setExerciseId,
  setSessionId,
} from '../../actions/actionCreators';

type State = Readonly<FormIds>;

const initialState: FormIds = {
  session: '',
  exercise: '',
};

const setSession = (
  state: State,
  { payload: { sessionId } }: ReturnType<typeof setSessionId>,
): State =>
  ({
    ...state,
    session: sessionId,
  });

const addSession = (
  state: State,
  { payload: { session: { id } } }: ReturnType<typeof addTrainingSession>,
): State =>
  ({
    ...state,
    session: id,
  });

const setExercise = (
  state: State,
  { payload: { exerciseId } }: ReturnType<typeof setExerciseId>,
): State =>
  ({
    ...state,
    exercise: exerciseId,
  });

export const formIds = (state = initialState, action: Action): State => {
  switch (action.type) {
    case SET_SESSION_ID:
      return setSession(state, action);
    case SET_EXERCISE_ID:
      return setExercise(state, action);
    case SESSION_ADDED:
      return addSession(state, action);
    default:
      return state;
  }
};
