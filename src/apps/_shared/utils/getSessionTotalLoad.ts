import { Uuid } from '../../_types/Uuid';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { Exercise } from '../../_types/data/Exercise';
import { ExerciseType } from '../../_types/enums/ExerciseType';

type ExerciseFilter = (exercise: SessionExercise) => boolean;

const reduceTotalLoad = (totalLoad: number, currentLoad: number) =>
  totalLoad + currentLoad;

export const getSessionTotalLoad = ({ bodyweight, exercises }: TrainingSession, getExerciseById: (id: Uuid) => Exercise | undefined, exerciseFilter: ExerciseFilter = () => true): number => {
  const filteredExercises = homogenousObjectToArray(exercises).filter(exerciseFilter);

  return filteredExercises
    .map(ex => {
      const exercise = getExerciseById(ex.exerciseId);

      if (!exercise || exercise.exerciseType === ExerciseType.Duration) {
        return 0;
      }

      const bodyweightAddition = bodyweight * exercise.relativeBodyweight / 100;

      return homogenousObjectToArray(ex.sets)
          .map(set => set.repsDuration * ((set.weight || 0) + bodyweightAddition))
          .reduce(reduceTotalLoad, 0);
    })
    .reduce(reduceTotalLoad, 0);
};
