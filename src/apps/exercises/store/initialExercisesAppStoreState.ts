import { ExercisesAppStoreState } from './ExercisesAppStoreState';
import * as initialExercises from '../../_shared/constants/initialExercises';
import { Exercise } from '../../_types/data/Exercise';
import { HomogenousObject } from '../../_types/HomogenousObject';

const exercises = Object
  .keys(initialExercises)
  .map((k: any) => ((initialExercises as any)[k]) as Exercise)
  .reduce(
    (exs, exercise) => {
      exs[exercise.id] = exercise;

      return exs;
    },
    {} as HomogenousObject<Exercise>,
  );

export const initialExercisesAppStoreState: ExercisesAppStoreState = {
  exercises,
};
