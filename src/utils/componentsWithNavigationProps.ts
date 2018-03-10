import {
  SessionExerciseForm,
} from '../containers/training-log/SessionExerciseForm';
import { TrainingSessionForm } from '../containers/training-log/TrainingSessionForm';
import { TrainingLog } from '../containers/training-log/TrainingLog';
import { TrainingSetForDuration } from '../containers/training-log/TrainingSetForDuration';
import { TrainingSetForReps } from '../containers/training-log/TrainingSetForReps';
import { SessionExercisesList } from '../containers/training-log/SessionExercisesList';
import { ExercisesList } from '../components/exercises/ExercisesList';
import { MultiSelect } from '../components/MultiSelect';
import { NewExerciseForm } from '../containers/exercises/NewExerciseForm';

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
  ExercisesList: {
    component: ExercisesList,
    navigationProps: {
      screen: 'Components.List',
      title: 'Exercises',
    },
  },
  MultiSelect: {
    component: MultiSelect,
    navigationProps: {
      screen: 'Component.MultiSelect',
      title: 'Select',
    },
  },
  NewExerciseForm: {
    component: NewExerciseForm,
    navigationProps: {
      screen: 'Container.NewExerciseForm',
      title: 'New exercise',
    },
  },
};
