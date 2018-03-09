import {
  SessionExerciseForm,
} from '../containers/SessionExerciseForm';
import { TrainingSessionForm } from '../containers/TrainingSessionForm';
import { TrainingLog } from '../containers/TrainingLog';
import { TrainingSetForDuration } from '../containers/TrainingSetForDuration';
import { TrainingSetForReps } from '../containers/TrainingSetForReps';
import { SessionExercisesList } from '../containers/SessionExercisesList';

export const componentsWithNavigationProps = {
  TrainingSetForReps: {
    component: TrainingSetForReps,
    navigationProps: {
      screen: 'Container.TrainingSetForReps',
      title: 'Add set'
    },
  },
  TrainingSetForDuration: {
    component: TrainingSetForDuration,
    navigationProps: {
      screen: 'Container.TrainingSetForDuration',
      title: 'Add set',
    },
  },
  TrainingLog: {
    component: TrainingLog,
    navigationProps: {
      screen: 'Container.TrainingLog',
      title: 'Training log',
    },
  },
  TrainingSessionForm: {
    component: TrainingSessionForm,
    navigationProps: {
      screen: 'Container.TrainingSessionForm',
      title: 'Training session form'
    }
  },
  SessionExerciseForm: {
    component: SessionExerciseForm,
    navigationProps: {
      screen: 'Container.SessionExerciseForm',
      title: 'Session exercise form',
    },
  },
  SessionExercisesList: {
    component: SessionExercisesList,
    navigationProps: {
      screen: 'Container.SessionExercisesList',
      title: 'Training session',
    },
  },
};
