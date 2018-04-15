import { Uuid } from '../Uuid';
import { HomogenousObject } from '../HomogenousObject';
import { SessionExercise } from './SessionExercise';

export type TrainingSession = {
  id: Uuid;
  date: number;
  bodyweight: number;
  exercises: HomogenousObject<SessionExercise>;
};
