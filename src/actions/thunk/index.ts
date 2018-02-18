import { realm } from '../../models/realm/realm';
import { IThunkAction } from '../../models/interfaces/IThunkAction';
import { IExerciseSchemaProps } from '../../models/classes/Exercise';
import { addExerciseAsyncFactory } from './addExerciseAsyncFactory';

export const addExerciseAsync: IThunkAction<IExerciseSchemaProps> = addExerciseAsyncFactory({
  realm,
});
