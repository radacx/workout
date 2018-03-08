import { IExercise } from '../models/interfaces/IExercise';
import {
  AddExerciseAction,
  AddSessionExercise,
  AddTrainingSession,
  AddTrainingSet,
  RemoveExerciseAction,
  UpdateExerciseAction,
} from '../models/actions/actions';
import { Guid } from '../models/Guid';
import {
  ISessionExercise,
  ITrainingSession,
} from '../models/interfaces/ITrainingSession';
import { WithZanorenie } from '../models/interfaces/With';
import { TrainingSet } from '../models/TrainingSet';

export const addExercise = (exercise: IExercise) =>
  new AddExerciseAction({
    exercise,
  });

export const updateExercise = (exercise: IExercise) =>
  new UpdateExerciseAction({
    exercise,
  });

export const removeExercise = (id: Guid) =>
  new RemoveExerciseAction({
    id,
  });

export const addTrainingSession = (session: ITrainingSession) =>
  new AddTrainingSession({
    session,
  });

export const addSessionExercise = ({ zanorenie, item: sessionExercise }: WithZanorenie<ISessionExercise>) =>
  new AddSessionExercise({
    sessionExercise,
    zanorenie,
  });

export const addTraningSet = ({ zanorenie, item: trainingSet }: WithZanorenie<TrainingSet>) =>
  new AddTrainingSet({
    trainingSet,
    zanorenie,
  });
