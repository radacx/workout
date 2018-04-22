import { TrainingLogAppStoreState } from './TrainingLogAppStoreState';
import { HomogenousObject } from '../../_types/HomogenousObject';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { pullUps } from '../../_shared/constants/initialExercises';
import { dateUtils } from '../../_shared/utils/dateUtils';

export const initialTrainingLogAppStoreState: TrainingLogAppStoreState = {
  sessions: {
    '1': {
      id: '1',
      bodyweight: 20,
      exercises: <HomogenousObject<SessionExercise>> {
        '1': {
          id: '1',
          exerciseId: pullUps.id,
          sets: {
            '1': {
              id: '1',
              weight: 20,
              rest: 0,
              repsDuration: 10,
            },
            '2': {
              id: '2',
              weight: 20,
              rest: 0,
              repsDuration: 10,
            }
          }
        }
      },
      date: dateUtils.todayToNumber(),
    },
    '2': {
      id: '2',
      bodyweight: 20,
      exercises: <HomogenousObject<SessionExercise>> {
        '1': {
          id: '1',
          exerciseId: pullUps.id,
          sets: {
            '1': {
              id: '1',
              weight: 40,
              rest: 0,
              repsDuration: 10,
            },
          }
        }
      },
      date: dateUtils.toNumber(new Date(2018, 4, 24))
    },
  },
  formIds: {
    session: '',
    exercise: '',
  },
};
