import {
  SessionExerciseForm,
} from '../apps/training-log/containers/SessionExerciseForm';
import { TrainingSessionForm } from '../apps/training-log/containers/TrainingSessionForm';
import { TrainingLog } from '../apps/training-log/containers/TrainingLog';
import { SessionExercisesList } from '../apps/training-log/containers/SessionExercisesList';
import { ExercisesApp } from '../apps/exercises/components/ExercisesApp';
import { ExerciseForm } from '../apps/exercises/containers/ExerciseForm';
import { SpecialSelect } from '../apps/_shared/components/special-select/SpecialSelect';
import { TrainingSet } from '../apps/training-log/containers/TrainingSet';

export const componentsWithNavigationProps = {
  TrainingSet: {
    component: TrainingSet,
    navigationProps: {
      screen: 'Container.TrainingSet',
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
  ExercisesList: {
    component: ExercisesApp,
    navigationProps: {
      screen: 'Components.List',
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
      title: 'Test',
    },
  },
};
