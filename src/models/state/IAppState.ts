import { ITrainingSession } from '../interfaces/ITrainingSession';
import { IHomogenousObject } from '../interfaces/IHomogenousObject';
import { IExercise } from '../interfaces/IExercise';
import { Zanorenie } from '../interfaces/With';

export interface IAppState {
  readonly exercises: IHomogenousObject<IExercise>;
  readonly sessions: IHomogenousObject<ITrainingSession>;
  readonly zanorenie: Zanorenie;
}
