import { combineReducers as _combineReducers } from 'redux';
import { ReducersMapObject } from '../../_types/store/ReducersMapObject';

export const combineReducers = <TState>(reducers: ReducersMapObject<TState>) =>
  _combineReducers<TState>(reducers);
