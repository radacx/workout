import { TrainingSession } from '../data/TrainingSession';
import { HomogenousObject } from '../HomogenousObject';
import { Exercise } from '../data/Exercise';
import { FormIds } from '../navigation/FormIds';

export type AppState = Readonly<{
  exercises: HomogenousObject<Exercise>;
  sessions: HomogenousObject<TrainingSession>;
  formIds: FormIds;
}>;
