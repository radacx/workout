import { Exercise } from '../../_types/data/Exercise';
import { HomogenousObject } from '../../_types/HomogenousObject';

export type ExercisesAppStoreState = {
  readonly exercises: HomogenousObject<Exercise>;
};
