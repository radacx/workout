import { IStore } from '../../_shared/store/IStore';
import { Dispatch as ReduxDispatch } from 'redux';

export type Dispatch = ReduxDispatch<{ type: string, payload?: any }, IStore>;
