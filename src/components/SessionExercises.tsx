import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { SessionExercise } from '../containers/SessionExercise';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { IHomogenousObject } from '../models/interfaces/IHomogenousObject';
import { homogenousObjectToArray } from '../utils/homogenousObjectToArray';

interface ISessionExercisesProps {
  readonly exercises: IHomogenousObject<ISessionExercise>;
}

export const SessionExercises: React.SFC<ISessionExercisesProps> = ({ exercises }) =>
  <FlatList
    data={homogenousObjectToArray(exercises)}
    renderItem={({ item }: ListRenderItemInfo<ISessionExercise>) => <SessionExercise exerciseId={item.exercise} />}
    keyExtractor={item => item.id}
  />;
