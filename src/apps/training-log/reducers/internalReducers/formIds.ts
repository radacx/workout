import {
  TrainingLog_AddSession,
  TrainingLog_SetExerciseId,
  TrainingLog_SetSessionId,
} from '../../constants/actionTypes';
import { initialTrainingLogAppStoreState } from '../../store/initialTrainingLogAppStoreState';
import { TrainingLogAction } from '../../_types/TrainingLogAction';

type State = typeof initialTrainingLogAppStoreState.formIds;

export const formIds = (state = initialTrainingLogAppStoreState.formIds, action: TrainingLogAction): State => {
  switch (action.type) {
    case TrainingLog_SetSessionId: {
      return {
        ...state,
        session: action.payload.sessionId,
      };
    }
    case TrainingLog_SetExerciseId: {
      return {
        ...state,
        exercise: action.payload.exerciseId,
      };
    }
    case TrainingLog_AddSession: {
      return {
        ...state,
        session: action.payload.session.id,
      };
    }
    default:
      return state;
  }
};
