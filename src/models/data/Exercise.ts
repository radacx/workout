import { MuscleGroup } from '../enums/MuscleGroup';
import { MovementPlane } from '../enums/MovementPlane';
import { Guid } from '../Guid';
import { ExerciseType } from '../enums/ExerciseType';

export interface Exercise {
  id: Guid;
  name: string;
  exerciseType: ExerciseType;
  primaryMuscleGroups: MuscleGroup[];
  secondaryMuscleGroups: MuscleGroup[];
  planesOfMovement: MovementPlane[];
  relativeBodyweight: number;
}
