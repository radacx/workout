import { ExercisesAppStoreState } from '../../exercises/store/ExercisesAppStoreState';
import { TrainingLogAppStoreState } from '../../training-log/store/TrainingLogAppStoreState';

export interface IStore {
  readonly exercisesApp: ExercisesAppStoreState;
  readonly trainingLogApp: TrainingLogAppStoreState;
}
