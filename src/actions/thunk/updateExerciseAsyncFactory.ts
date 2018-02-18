import { Dispatch } from 'redux';
import { updateExercise } from '../actionCreators';
import {
  Exercise,
  IExerciseSchemaProps,
} from '../../models/classes/Exercise';
import { IAppState } from '../../models/state/IAppState';

export interface IUpdateExerciseAsyncFactoryDeps {
  readonly realm: Realm;
  readonly updateExercise: typeof updateExercise;
}

export const updateExerciseAsyncFactory =
  (deps: IUpdateExerciseAsyncFactoryDeps) =>
    (partialExercise: IExerciseSchemaProps) =>
      (dispatch: Dispatch<IAppState>) => {
        /*deps.realm.write(() =>
         deps.realm.create(Exercise, partialExercise));*/

        const exercise = Exercise.fromPartial(partialExercise);

        return dispatch(deps.updateExercise(exercise));
      };
