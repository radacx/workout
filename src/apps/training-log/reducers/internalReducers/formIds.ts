import {
  TrainingLog_AddSession,
  TrainingLog_SetExerciseId,
  TrainingLog_SetSessionId,
} from '../../constants/actionTypes';
import * as actions from '../../actions/actionCreators';
import { initialTrainingLogAppStoreState } from '../../store/initialTrainingLogAppStoreState';
import { TrainingLogAction } from '../../_types/TrainingLogAction';

type State = typeof initialTrainingLogAppStoreState.formIds;

const setSession = (state: State, { payload: { sessionId } }: ReturnType<typeof actions.setSessionId>,
): State => ({
  ...state,
  session: sessionId,
});

const addSession = (state: State, { payload: { session } }: ReturnType<typeof actions.addTrainingSession>,
): State => ({
  ...state,
  session: session.id,
});

const setExercise = (state: State, { payload: { exerciseId } }: ReturnType<typeof actions.setExerciseId>,
): State => ({
  ...state,
  exercise: exerciseId,
});

export const formIds = (state = initialTrainingLogAppStoreState.formIds, action: TrainingLogAction): State => {
  switch (action.type) {
    case TrainingLog_SetSessionId: {
      return setSession(state, action);
    }
    case TrainingLog_SetExerciseId: {
      return setExercise(state, action);
    }
    case TrainingLog_AddSession: {
      return addSession(state, action);
    }
    default:
      return state;
  }
};
