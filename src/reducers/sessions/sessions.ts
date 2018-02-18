import { IAction } from '../../models/interfaces/IAction';
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';

export const sessions = (state: ITrainingSession[] = [], action: IAction) =>
  action ? state : state;
