import { Exercise } from '../models/Exercise';
import { ITrainingSession } from '../models/interfaces/ITrainingSession';
import { Guid } from '../models/Guid';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { ExerciseType } from '../models/enums/ExerciseType';

const toArray = homogenousObjectToArray;

export const getTotalVolumeOfSession = (session: ITrainingSession, getExerciseById: (id: Guid) => Exercise) => {
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
                  + (relBw ? relBw * bw : 0);
              },
              0,
            );
      },
      0,
    );
};
