import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { SessionExercise } from '../containers/SessionExercise';
import { SessionExercise as SessionExerciseModel } from '../../_types/data/SessionExercise';
import { Validation } from '../../_types/validation/Validation';

type Props = {
  readonly exercises: SessionExerciseModel[];
};

export class SessionExercises extends React.PureComponent<Props> {
  static displayName = 'SessionExercises';

  static propTypes: Validation<Props> = {
    exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  _renderExercise = ({ item }: ListRenderItemInfo<SessionExerciseModel>) =>
    <SessionExercise
      exerciseId={item.exerciseId}
      sessionExerciseId={item.id}
    />;

  _extractKey = (item: SessionExerciseModel) => item.id;

  render() {
    return (
      <FlatList
        data={this.props.exercises}
        renderItem={this._renderExercise}
        keyExtractor={this._extractKey}
      />
    );
  }
}
