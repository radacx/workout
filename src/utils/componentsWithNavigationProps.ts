import {
  SessionExerciseForm,
} from '../containers/training-log/SessionExerciseForm';
import { TrainingSessionForm } from '../containers/training-log/TrainingSessionForm';
import { TrainingLog } from '../containers/training-log/TrainingLog';
import { SessionExercisesList } from '../containers/training-log/SessionExercisesList';
import { ExercisesList } from '../components/exercises/ExercisesList';
import { ExerciseForm } from '../containers/exercises/ExerciseForm';
import { SpecialSelect } from '../components/special-select/SpecialSelect';
import { TrainingSet } from '../containers/training-log/TrainingSet';

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
    component: ExercisesList,
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
