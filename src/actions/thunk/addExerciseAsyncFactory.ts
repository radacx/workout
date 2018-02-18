import { IAction } from '../../models/interfaces/IAction';
import { Dispatch } from 'redux';
import { addExercise } from '../actionCreators';
import {
  Exercise,
  IExerciseSchemaProps,
} from '../../models/classes/Exercise';

export interface IAddExerciseAsyncFactoryDeps {
  readonly realm: Realm;
}

export const addExerciseAsyncFactory =
  (deps: IAddExerciseAsyncFactoryDeps) =>
    (partialExercise: IExerciseSchemaProps) =>
      (dispatch: Dispatch<IAction>) => {
        deps.realm.write(() =>
          deps.realm.create(Exercise, partialExercise));

        const exercise = Exercise.fromPartial(partialExercise);
        return dispatch(addExercise(exercise));
      };
