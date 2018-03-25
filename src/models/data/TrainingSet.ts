import { Guid } from '../Guid';
import { Tempo } from './Tempo';

export interface TrainingSet {
  id: Guid;
  rest: number;
  weight?: number;
  repsDuration: number;
  tempo?: Tempo;
}
