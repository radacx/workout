import {
  SessionExerciseForm,
} from '../apps/training-log/containers/SessionExerciseForm';
import { TrainingSessionForm } from '../apps/training-log/containers/TrainingSessionForm';
import { TrainingLogApp } from '../apps/training-log/containers/TrainingLogApp';
import { SessionExercisesList } from '../apps/training-log/containers/SessionExercisesList';
import { ExercisesApp } from '../apps/exercises/components/ExercisesApp';
import { ExerciseForm } from '../apps/exercises/containers/ExerciseForm';
import { TrainingSet } from '../apps/training-log/containers/TrainingSet';
import { AnalyticsApp } from '../apps/analytics/containers/AnalyticsApp';
import { SpecialSelect } from '../apps/_shared/components/special-select/SpecialSelect';

export const componentsWithNavigationProps = {
  TrainingSet: {
    component: TrainingSet,
    navigationProps: {
      screen: 'Container.TrainingSet',
      title: 'Add set',
    },
  },
  TrainingLogApp: {
    component: TrainingLogApp,
    navigationProps: {
      screen: 'Container.TrainingLogApp',
      title: 'Training log',
    },
  },
  TrainingSessionForm: {
    component: TrainingSessionForm,
    navigationProps: {
      screen: 'Container.TrainingSessionForm',
      title: 'Training session form',
    },
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
  ExercisesApp: {
    component: ExercisesApp,
    navigationProps: {
      screen: 'Components.ExercisesApp',
      title: 'Exercises',
    },
  },
  ExerciseForm: {
    component: ExerciseForm,
    navigationProps: {
      screen: 'Container.ExerciseForm',
      title: 'Modify Exercise',
    },
  },
  SpecialSelect: {
    component: SpecialSelect,
    navigationProps: {
      screen: 'Component.SpecialSelect',
      title: 'Select',
    },
  },
  AnalyticsApp: {
    component: AnalyticsApp,
    navigationProps: {
      screen: 'Container.AnalyticsApp',
      title: 'Training log statistics'
    },
  },
};
