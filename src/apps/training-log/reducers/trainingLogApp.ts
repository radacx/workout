import { combineReducers } from '../../_shared/utils/combineReducers';
import { TrainingLogAppStoreState } from '../store/TrainingLogAppStoreState';
import { sessions } from './internalReducers/sessions';
import { formIds } from './internalReducers/formIds';

export const trainingLogApp = combineReducers<TrainingLogAppStoreState>({
  sessions,
  formIds,
});
