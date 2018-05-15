import {
  assign,
  assignWithGet,
} from '../../../_shared/utils/assign';
import {
  TrainingLog_AddSession,
  TrainingLog_DeleteSession,
  TrainingLog_AddSessionExercise,
  TrainingLog_RemoveSessionExercise,
  TrainingLog_UpdateSessionExercise,
  TrainingLog_UpdateSession,
  TrainingLog_AddTrainingSet,
  TrainingLog_RemoveTrainingSet,
  TrainingLog_UpdateTrainingSet,
} from '../../constants/actionTypes';
import { initialTrainingLogAppStoreState } from '../../store/initialTrainingLogAppStoreState';
import { TrainingLogAction } from '../../_types/TrainingLogAction';

type State = typeof initialTrainingLogAppStoreState.sessions;

export const sessions = (state = initialTrainingLogAppStoreState.sessions, action: TrainingLogAction): State => {
  switch (action.type) {
    case TrainingLog_AddSession: {
      const { session } = action.payload;

      return assign(state, st => ({
        ...st,
        [session.id]: session,
      }));
    }

    case TrainingLog_UpdateSession: {
      const { session } = action.payload;

      return assignWithGet(
        state,
        st => st[session.id],
        sess => ({
          ...sess,
          ...session,
        }),
      );
    }

    case TrainingLog_DeleteSession: {
      return assign(state, st => {
        const tempState = { ...st };
        delete tempState[action.payload.id];

        return tempState;
      });
    }

    case TrainingLog_AddSessionExercise: {
      const { sessionExercise, formIds } = action.payload;

      return assignWithGet(
        state,
        st => st[formIds.session].exercises,
        exercises => ({
          ...exercises,
          [sessionExercise.id]: sessionExercise,
        }),
      );
    }

    case TrainingLog_UpdateSessionExercise: {
      const { sessionExercise, formIds } = action.payload;

      return assignWithGet(
        state,
        st => st[formIds.session].exercises,
        exercises => ({
          ...exercises,
          [sessionExercise.id]: sessionExercise,
        }),
      );
    }

    case TrainingLog_RemoveSessionExercise: {
      const { formIds, id } = action.payload;

      return assignWithGet(
        state,
        st => st[formIds.session].exercises,
        exercises => {
          const tempExercises = { ...exercises };
          delete tempExercises[id];

          return tempExercises;
        },
      );
    }

    case TrainingLog_AddTrainingSet: {
      const { formIds, trainingSet } = action.payload;

      return assignWithGet(
        state,
        st => st[formIds.session].exercises[formIds.exercise].sets,
        sets => ({
          ...sets,
          [trainingSet.id]: trainingSet,
        }),
      );
    }

    case TrainingLog_UpdateTrainingSet: {
      const { formIds, trainingSet } = action.payload;

      return assignWithGet(
        state,
        st => st[formIds.session].exercises[formIds.exercise].sets,
        sets => ({
          ...sets,
          [trainingSet.id]: trainingSet,
        }),
      );
    }

    case TrainingLog_RemoveTrainingSet: {
      const { formIds, id } = action.payload;

      return assignWithGet(
        state,
        st => st[formIds.session].exercises[formIds.exercise].sets,
        sets => {
          const tempSets = { ...sets };
          delete tempSets[id];

          return tempSets;
        },
      );
    }

    default:
      return state;
  }
};
