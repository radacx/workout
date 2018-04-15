import {
  addSessionExercise as _addSessionExercise,
  addTrainingSet as _addTrainingSet,
} from './actionCreators';
import { ThunkAction } from '../../_types/actions/ThunkAction';
import { IStore } from '../../_shared/store/IStore';
import { Dispatch } from 'react-redux';
import { TrainingSet } from '../../_types/data/TrainingSet';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { TrainingLogAction } from '../_types/TrainingLogAction';

export const addTrainingSet: ThunkAction<TrainingSet, TrainingLogAction> = (trainingSet: TrainingSet) =>
  (dispatch: Dispatch<{}>, getState: () => IStore) => {
    const { trainingLogApp: { formIds } } = getState();

    return dispatch(_addTrainingSet(
      trainingSet,
      formIds,
    ));
  };

export const addSessionExercise: ThunkAction<SessionExercise, TrainingLogAction> = (sessionExercise: SessionExercise) =>
  (dispatch: Dispatch<{}>, getState: () => IStore) => {
    const { trainingLogApp: { formIds } } = getState();

    return dispatch(_addSessionExercise(
      sessionExercise,
      formIds,
    ));
  };

