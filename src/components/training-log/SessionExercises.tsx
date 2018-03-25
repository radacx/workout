import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { SessionExercise } from '../../containers/training-log/SessionExercise';
import { SessionExercise as SessionExerciseModel } from '../../models/data/SessionExercise';
import { HomogenousObject } from '../../models/HomogenousObject';
import { homogenousObjectToArray } from '../../utils/homogenousObjectToArray';

interface SessionExercisesProps {
  exercises: HomogenousObject<SessionExerciseModel>;
}

type Props = Readonly<SessionExercisesProps>;

export class SessionExercises extends React.PureComponent<Props> {
  static displayName = 'SessionExercises';

  _renderExercise = ({ item }: ListRenderItemInfo<SessionExerciseModel>) =>
    <SessionExercise
      exerciseId={item.exercise}
      sessionExerciseId={item.id}
    />;

  _extractKey = (item: SessionExerciseModel) => item.id;

  render() {
    return (
      <FlatList
        data={homogenousObjectToArray(this.props.exercises)}
        renderItem={this._renderExercise}
        keyExtractor={this._extractKey}
      />
    );
  }
}
