import { assign } from '../../../_shared/utils/assign';
import * as actions from '../../actions/actionCreators';
import {
  Exercises_AddExercise,
  Exercises_DeleteExercise,
  Exercises_UpdateExercise,
} from '../../constants/actionTypes';
import { initialExercisesAppStoreState } from '../../store/initialExercisesAppStoreState';
import { ExercisesAction } from '../../_types/ExercisesAction';

type State = typeof initialExercisesAppStoreState.exercises;

const addExercise = (state: State, { payload: { exercise } }: ReturnType<typeof actions.addExercise>,
): State => assign(
  state,
  st => ({
    ...st,
    [exercise.id]: exercise,
  }),
);

const updateExercise = (state: State, { payload: { exercise } }: ReturnType<typeof actions.updateExercise>,
): State => assign(
  state,
  st => ({
    ...st,
    [exercise.id]: exercise,
  }),
);

const removeExercise = (state: State, { payload: { id } }: ReturnType<typeof actions.removeExercise>,
): State => assign(
  state,
  st => {
    const temp = { ...st };
    delete temp[id];

    return temp;
  },
);

export const exercises = (state = initialExercisesAppStoreState.exercises, action: ExercisesAction): State => {
  switch (action.type) {
    case Exercises_AddExercise: {
      return addExercise(state, action);
    }
    case Exercises_UpdateExercise: {
      return updateExercise(state, action);
    }
    case Exercises_DeleteExercise: {
      return removeExercise(state, action);
    }
    default:
      return state;
  }
};
