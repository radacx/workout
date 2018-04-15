import { Uuid } from '../Uuid';
import { Tempo } from './Tempo';

export type TrainingSet = {
  id: Uuid;
  rest: number;
  repsDuration: number;
  weight?: number;
  tempo?: Tempo;
};
