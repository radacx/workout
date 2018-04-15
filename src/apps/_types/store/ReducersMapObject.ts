import { Reducer } from 'redux';

export type ReducersMapObject<TStoreState> = {
  [storeProp in keyof TStoreState]: Reducer<TStoreState[storeProp]>;
};
