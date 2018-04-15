import { MuscleGroup } from '../enums/MuscleGroup';
import { MovementPlane } from '../enums/MovementPlane';
import { Uuid } from '../Uuid';
import { ExerciseType } from '../enums/ExerciseType';

export type Exercise = {
  id: Uuid;
  name: string;
  exerciseType: ExerciseType;
  primaryMuscleGroups: MuscleGroup[];
  secondaryMuscleGroups: MuscleGroup[];
  planesOfMovement: MovementPlane[];
  relativeBodyweight: number;
};
