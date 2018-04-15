import { Uuid } from '../../_types/Uuid';
import { Exercise } from '../../_types/data/Exercise';
import {
  Exercises_AddExercise,
  Exercises_UpdateExercise,
  Exercises_DeleteExercise,
} from '../constants/actionTypes';
import { createAction } from '../../_shared/utils/createAction';

export const addExercise = createAction((exercise: Exercise) => (
  {
    type: Exercises_AddExercise,
    payload: { exercise },
  }
));

export const updateExercise = createAction((exercise: Exercise) => ({
  type: Exercises_UpdateExercise,
  payload: { exercise },
}));

export const removeExercise = createAction((id: Uuid) => ({
  type: Exercises_DeleteExercise,
  payload: { id },
}));
