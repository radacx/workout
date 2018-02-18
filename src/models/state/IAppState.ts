import { ExercisesState } from './ExercisesState';
import { ITrainingSession } from '../interfaces/ITrainingSession';

export interface IAppState {
  readonly exercises: ExercisesState;
  readonly sessions: ITrainingSession[];
}
