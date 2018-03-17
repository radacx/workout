import { ITrainingSession } from '../interfaces/ITrainingSession';
import { IHomogenousObject } from '../interfaces/IHomogenousObject';
import { Exercise } from '../Exercise';
import { IFormIds } from '../interfaces/IFormIds';

export interface IAppState {
  readonly exercises: IHomogenousObject<Exercise>;
  readonly sessions: IHomogenousObject<ITrainingSession>;
  readonly formIds: IFormIds;
}
