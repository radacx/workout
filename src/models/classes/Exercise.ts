import { defaults } from 'lodash';
import { IExercise } from '../interfaces/IExercise';
import { IRealmSchema } from '../realm/IRealmSchema';
import { IHasId } from '../interfaces/IHasId';
import { defaultUuid } from '../../constants/defaultUuid';
import { Guid } from '../Guid';
import { MuscleGroup } from '../enums/MuscleGroup';
import { MovementPlane } from '../enums/MovementPlane';
import { ExerciseType } from '../enums/ExerciseType';

export interface IExerciseSchemaProps {
  id: Guid;
  name: string;
  primaryMuscleGroups: MuscleGroup[];
  planesOfMovement: MovementPlane[];
}

const defaultValues: IExercise = {
  id: defaultUuid,
  name: 'HEHE',
  exerciseType: ExerciseType.Reps,
  primaryMuscleGroups: [],
  secondaryMuscleGroups: [],
  planesOfMovement: [],
};

export class Exercise {
  static schema: IRealmSchema<IExercise, IExerciseSchemaProps> =
    {
      name: 'Exercise',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        primaryMuscleGroups: 'string[]',
        planesOfMovement: 'string[]',
      },
    };

  static fromPartial = (params: Partial<IExercise> & IHasId): IExercise =>
    defaults(params, defaultValues);
}
