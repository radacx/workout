import { assign } from '../../../_shared/utils/assign';
import {
  Exercises_AddExercise,
  Exercises_DeleteExercise,
  Exercises_UpdateExercise,
} from '../../constants/actionTypes';
import { initialExercisesAppStoreState } from '../../store/initialExercisesAppStoreState';
import { ExercisesAction } from '../../_types/ExercisesAction';

type State = typeof initialExercisesAppStoreState.exercises;

export const exercises = (state = initialExercisesAppStoreState.exercises, action: ExercisesAction): State => {
  switch (action.type) {
    case Exercises_AddExercise: {
      const { exercise } = action.payload;

      return assign(state, st => ({
        ...st,
        [exercise.id]: exercise,
      }));
    }

    case Exercises_UpdateExercise: {
      const { exercise } = action.payload;

      return assign(state, st => ({
        ...st,
        [exercise.id]: exercise,
      }));
    }

    case Exercises_DeleteExercise: {
      return assign(state, st => {
        const tempState = { ...st };
        delete tempState[action.payload.id];

        return tempState;
      });
    }

    default:
      return state;
  }
};
