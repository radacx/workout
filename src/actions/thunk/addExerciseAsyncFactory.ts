import { Dispatch } from 'redux';
import { addExercise} from '../actionCreators';
import {
  Exercise,
  IExerciseSchemaProps,
} from '../../models/classes/Exercise';
import { IAppState } from '../../models/state/IAppState';
import { NavigationActions } from 'react-navigation';

export interface IAddExerciseAsyncFactoryDeps {
  readonly realm: Realm;
  readonly addExercise: typeof addExercise;
}

export const addExerciseAsyncFactory =
  (deps: IAddExerciseAsyncFactoryDeps) =>
    (partialExercise: IExerciseSchemaProps) =>
      (dispatch: Dispatch<IAppState>) => {
        /*deps.realm.write(() =>
          deps.realm.create(Exercise, partialExercise));*/

        const exercise = Exercise.fromPartial(partialExercise);
        deps.addExercise(exercise);

        return dispatch(dispatch(NavigationActions.back()));
      };
