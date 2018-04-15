import { exercisesApp } from '../../exercises/reducers/exercisesApp';
import { combineReducers } from '../utils/combineReducers';
import { IStore } from '../store/IStore';
import { trainingLogApp } from '../../training-log/reducers/trainingLogApp';

export const reducer = combineReducers<IStore>({
  exercisesApp,
  trainingLogApp,
});
