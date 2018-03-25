import { Guid } from '../Guid';
import { HomogenousObject } from '../HomogenousObject';
import { SessionExercise } from './SessionExercise';

export interface TrainingSession {
  id: Guid;
  date: number;
  bodyweight: number;
  exercises: HomogenousObject<SessionExercise>;
}
