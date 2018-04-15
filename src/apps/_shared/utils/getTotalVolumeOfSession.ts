import { Exercise } from '../../_types/data/Exercise';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { Uuid } from '../../_types/Uuid';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { ExerciseType } from '../../_types/enums/ExerciseType';

const toArray = homogenousObjectToArray;

export const getTotalVolumeOfSession = (session: TrainingSession,
  getExerciseById: (id: Uuid) => Exercise,
) => {
  const bw = session.bodyweight;

  toArray(session.exercises)
    .reduce((load, sessExercise) => {
      const exercise = getExerciseById(sessExercise.exercise);

      if (exercise.exerciseType !== ExerciseType.Reps) {
        return load;
      }

      return load + toArray(sessExercise.sets)
        .reduce((loadPerSets, set) => {
          const relBw = exercise.relativeBodyweight;

          return loadPerSets + (
            set.weight || 0
          ) + relBw * bw;
        }, 0);
    }, 0);
};
