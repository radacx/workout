import { Uuid } from '../../_types/Uuid';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { Exercise } from '../../_types/data/Exercise';

type ExerciseFilter = (exercise: SessionExercise) => boolean;

const reduceTotalLoad = (totalLoad: number, currentLoad: number) =>
  totalLoad + currentLoad;

export const getSessionTotalLoad = ({ bodyweight, exercises }: TrainingSession, getExerciseById: (id: Uuid) => Exercise, exerciseFilter: ExerciseFilter = () => true): number => {
  const filteredExercises = homogenousObjectToArray(exercises).filter(exerciseFilter);

  return filteredExercises
    .map(ex => {
      const exercise = getExerciseById(ex.exerciseId);
      const sets = homogenousObjectToArray(ex.sets);

      const bodyweightAddition = exercise
        ? bodyweight * exercise.relativeBodyweight
        : 0;

      return bodyweightAddition * sets.length
        + sets
          .map(set => set.weight || 0)
          .reduce(reduceTotalLoad, 0);
    })
    .reduce(reduceTotalLoad, 0);
};
