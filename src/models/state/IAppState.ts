import { ITrainingSession } from '../interfaces/ITrainingSession';
import { IHomogenousObject } from '../interfaces/IHomogenousObject';
import { IExercise } from '../interfaces/IExercise';

export interface IAppState {
  readonly exercises: IHomogenousObject<IExercise>;
  readonly sessions: IHomogenousObject<ITrainingSession>;
  readonly nav: any;
}
