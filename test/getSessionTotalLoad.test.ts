import { expect } from 'chai';
import { getSessionTotalLoad } from '../src/apps/_shared/utils/getSessionTotalLoad';
import { TrainingSession } from '../src/apps/_types/data/TrainingSession';
import { Uuid } from '../src/apps/_types/Uuid';
import { Exercise } from '../src/apps/_types/data/Exercise';
import { ExerciseType } from '../src/apps/_types/enums/ExerciseType';
import { HomogenousObject } from '../src/apps/_types/HomogenousObject';
import { SessionExercise } from '../src/apps/_types/data/SessionExercise';
import { TrainingSet } from '../src/apps/_types/data/TrainingSet';

const arrayToHomogenousObject = <T>(array: T[]): HomogenousObject<T> =>
  array as any;

const createFakeExercise = (id: Uuid, relativeBodyweight = 0): Exercise => ({
  exerciseType: ExerciseType.Duration,
  id,
  name: '',
  planesOfMovement: [],
  primaryMuscleGroups: [],
  relativeBodyweight,
  secondaryMuscleGroups: [],
});

const createSessionExercise = (exerciseId: Uuid, sets: TrainingSet[]): SessionExercise => ({
  id: '1',
  exerciseId,
  sets: arrayToHomogenousObject(sets),
});

const createSet = (weight: number, repsDuration: number): TrainingSet => ({
  id: '',
  repsDuration,
  rest: 0,
  tempo: '4',
  weight,
});

describe('getSessionTotalLoad', () => {
  it('will', () => {
    const session: TrainingSession = {
      exercises: arrayToHomogenousObject(<SessionExercise[]>[
        createSessionExercise('1', [
          createSet(100, 3),
          createSet(120, 5),
          createSet(150, 1),
        ]),
      ]),
      bodyweight: 50,
      date: 50,
      id: '4',
    };

    const getExerciseById = (id: Uuid): Exercise => {
      let relativeBodyweight;

      switch (id) {
        default:
        case '1':
          relativeBodyweight = 0;
      }

      return createFakeExercise(id, relativeBodyweight);
    };

    const result = getSessionTotalLoad(session, getExerciseById);

    expect(result)
      .to.equal(1050);
  });
});
