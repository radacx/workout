import { TrainingSetForReps } from '../components/forms/TrainingSetForReps';
import { TrainingSetForDuration } from '../components/forms/TrainingSetForDuration';
import {
  SessionExerciseForm,
} from '../containers/SessionExerciseForm';
import { AddNewTrainingSession } from '../containers/AddNewTrainingSession';
import { TrainingLog } from '../components/screens/TrainingLog';

export const componentsWithNavigationProps = {
  TrainingSetForReps: {
    component: TrainingSetForReps,
    navigationProps: {
      screen: 'Component.TrainingSetForReps',
      title: 'Add set'
    },
  },
  TrainingSetForDuration: {
    component: TrainingSetForDuration,
    navigationProps: {
      screen: 'Component.TrainingSetForDuration',
      title: 'Add set',
    },
  },
  TrainingLog: {
    component: TrainingLog,
    navigationProps: {
      screen: 'Component.TrainingLog',
      title: 'Training log',
    },
  },
  AddNewTrainingSession: {
    component: AddNewTrainingSession,
    navigationProps: {
      screen: 'Container.AddNewTrainingSession',
      title: 'New training session '
    }
  },
  SessionExerciseForm: {
    component: SessionExerciseForm,
    navigationProps: {
      screen: 'Container.SessionExerciseForm',
      title: 'Session exercise form',
    },
  },
};
