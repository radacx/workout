import { realm } from '../../models/realm/realm';
import { addExerciseAsyncFactory } from './addExerciseAsyncFactory';
import { updateExerciseAsyncFactory } from './updateExerciseAsyncFactory';
import {
  addExercise,
  updateExercise,
} from '../actionCreators';

export const addExerciseAsync = addExerciseAsyncFactory({
  realm,
  addExercise,
});

export const updateExerciseAsync = updateExerciseAsyncFactory({
  realm,
  updateExercise,
});
