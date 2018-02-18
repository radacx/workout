import { addToMap } from '../../utils/mapUtils';
import { IAction } from '../../models/interfaces/IAction';
import { ExercisesState } from '../../models/state/ExercisesState';
import { EXERCISE_ADDED } from '../../constants/actionTypes';

const addExercise = (state: ExercisesState, { payload: { exercise } }: IAction): ExercisesState =>
  addToMap(state, exercise);

const initialState: ExercisesState = {};

export const exercises = (state: ExercisesState = initialState, action: IAction): ExercisesState => {
  switch (action.type) {
    case EXERCISE_ADDED:
      return addExercise(state, action);

    default:
      return state;
  }
};
