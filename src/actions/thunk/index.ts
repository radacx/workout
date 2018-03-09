import { realm } from '../../models/realm/realm';
import { addExerciseAsyncFactory } from './addExerciseAsyncFactory';
import { updateExerciseAsyncFactory } from './updateExerciseAsyncFactory';
import {
  addExercise,
  addSessionExercise,
  addTraningSet,
  updateExercise,
} from '../actionCreators';
import { IThunkAction } from '../../models/interfaces/IThunkAction';
import { IAppState } from '../../models/state/IAppState';
import { Dispatch } from 'react-redux';
import { TrainingSet } from '../../models/TrainingSet';
import { ISessionExercise } from '../../models/interfaces/ITrainingSession';

export const addExerciseAsync = addExerciseAsyncFactory({
  realm,
  addExercise,
});

export const updateExerciseAsync = updateExerciseAsyncFactory({
  realm,
  updateExercise,
});

export const addTrainingSetAsync: IThunkAction<TrainingSet> = (trainingSet: TrainingSet) =>
  (dispatch: Dispatch<{}>, getState: () => IAppState) => {
    const formIds = getState().formIds;

    return dispatch(addTraningSet(trainingSet, formIds));
  };

export const addSessionExerciseAsync: IThunkAction<ISessionExercise> = (sessionExercise: ISessionExercise) =>
  (dispatch: Dispatch<{}>, getState: () => IAppState) => {
    const formIds = getState().formIds;

    return dispatch(addSessionExercise(sessionExercise, formIds));
  };

