import { Exercise } from '../models/data/Exercise';
import { TrainingSession } from '../models/data/TrainingSession';
import { Guid } from '../models/Guid';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { ExerciseType } from '../models/enums/ExerciseType';

const toArray = homogenousObjectToArray;

export const getTotalVolumeOfSession = (
  session: TrainingSession,
  getExerciseById: (id: Guid) => Exercise,
) => {
  const bw = session.bodyweight;

  toArray(session.exercises)
    .reduce(
      (load, sessExercise) => {
        const exercise = getExerciseById(sessExercise.exercise);

        if (exercise.exerciseType !== ExerciseType.Reps) {
          return load;
        }

        return load
          + toArray(sessExercise.sets)
            .reduce(
              (loadPerSets, set) => {
                const relBw = exercise.relativeBodyweight;

                return loadPerSets
                  + (set.weight || 0)
                  + relBw * bw;
              },
              0,
            );
      },
      0,
    );
};
