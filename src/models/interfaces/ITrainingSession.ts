import { Guid } from '../Guid';
import { IExercise } from './IExercise';

export enum ExerciseType {
  Reps = 'Reps',
  Duration = 'Duration',
}

export interface ITempo {
  readonly eccentric: number;
  readonly eccentricPause: number;
  readonly concentric: number;
  readonly concentricPause: number;
}

export interface ITrainingSetForReps extends ITrainingSet {
  readonly reps: number;
  readonly tempo: ITempo;
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
  readonly sets: ITrainingSet[];
}

export interface ITrainingSession {
  readonly id: Guid;
  readonly begin: Date;
  readonly end: Date;
  readonly bodyweight: number;
  readonly exercises: ISessionExercise[];
}

export interface IBodyweightExercise extends IExercise {
  readonly relativeBodyweight: number;
}
