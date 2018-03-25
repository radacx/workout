import {
  addSessionExercise as _addSessionExercise,
  addTrainingSet as _addTrainingSet,
} from './actionCreators';
import { ThunkAction } from '../models/state/ThunkAction';
import { AppState } from '../models/state/AppState';
import { Dispatch } from 'react-redux';
import { TrainingSet } from '../models/data/TrainingSet';
import { SessionExercise } from '../models/data/SessionExercise';

export const addTrainingSet: ThunkAction<TrainingSet> = (trainingSet: TrainingSet) =>
  (dispatch: Dispatch<{}>, getState: () => AppState) => {
    const formIds = getState().formIds;

    return dispatch(_addTrainingSet(
      trainingSet,
      formIds,
    ));
  };

export const addSessionExercise: ThunkAction<SessionExercise> = (sessionExercise: SessionExercise) =>
  (dispatch: Dispatch<{}>, getState: () => AppState) => {
    const formIds = getState().formIds;

    return dispatch(_addSessionExercise(
      sessionExercise,
      formIds,
    ));
  };

