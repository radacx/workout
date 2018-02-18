import { MuscleGroup } from '../enums/MuscleGroup';
import { MovementPlane } from '../enums/MovementPlane';
import { Guid } from '../Guid';

export interface IExercise {
  id: Guid;
  name: string;
  primaryMuscleGroups: MuscleGroup[];
  secondaryMuscleGroups: MuscleGroup[];
  planesOfMovement: MovementPlane[];
}
