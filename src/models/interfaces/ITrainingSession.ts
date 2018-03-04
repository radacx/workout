import { Guid } from '../Guid';
import { IExercise } from './IExercise';
import { IHomogenousObject } from './IHomogenousObject';
import { TrainingSet } from '../TrainingSet';

export interface ITempo {
  readonly eccentric: number;
  readonly eccentricPause: number;
  readonly concentric: number;
  readonly concentricPause: number;
}

export interface ITrainingSetForReps extends ITrainingSet {
  readonly reps: number;
  readonly tempo?: ITempo;
}

export interface ITrainingSetForDuration extends ITrainingSet {
  readonly duration: number;
}

export interface ITrainingSet {
  readonly id: Guid;
  readonly rest: number;
  readonly weight?: number;
}

export interface ISessionExercise {
  readonly id: Guid;
  readonly exercise: IExercise['id'];
  readonly sets: IHomogenousObject<TrainingSet>;
}

export interface ITrainingSession {
  readonly id: Guid;
  readonly date: Date;
  readonly bodyweight: number;
  readonly exercises: IHomogenousObject<ISessionExercise>;
}

export interface IBodyweightExercise extends IExercise {
  readonly relativeBodyweight: number;
}
