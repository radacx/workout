import { HomogenousObject } from '../HomogenousObject';
import { TrainingSet } from './TrainingSet';
import { Uuid } from '../Uuid';

export type SessionExercise = {
  id: Uuid;
  exerciseId: Uuid;
  sets: HomogenousObject<TrainingSet>;
};
