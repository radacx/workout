import { CreateActionType } from '../../_types/actions/CreateActionType';
import * as actions from '../actions/actionCreators';

export type TrainingLogAction = CreateActionType<typeof actions>;
