import * as actions from '../actions/actionCreators';
import {CreateActionType} from './CreateActionType';

export type Action = CreateActionType<typeof actions>;
