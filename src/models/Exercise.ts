import { IExercise } from './interfaces/IExercise';
import { IBodyweightExercise } from './interfaces/ITrainingSession';

export type Exercise = IExercise | IBodyweightExercise;
