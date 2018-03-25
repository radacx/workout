import { HomogenousObject } from '../HomogenousObject';
import { TrainingSet } from './TrainingSet';
import { Exercise } from './Exercise';
import { Guid } from '../Guid';

export interface SessionExercise {
  id: Guid;
  exercise: Exercise['id'];
  sets: HomogenousObject<TrainingSet>;
}
