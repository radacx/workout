import {
  ITrainingSetForDuration,
  ITrainingSetForReps,
} from './interfaces/ITrainingSession';

export type TrainingSet = ITrainingSetForReps | ITrainingSetForDuration;
