import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../NumericInput';

interface ITrainingSetForRepsState {
  readonly reps: number;
  readonly rest: number;
}

export class TrainingSetForReps extends React.PureComponent<{}, ITrainingSetForRepsState> {
  _repsChanged = (reps: number) =>
    this.setState({
      reps,
    });

  _restChanged = (rest: number) =>
    this.setState({
      rest,
    });

  render() {
    return(
      <View>
        <Text>
          Reps
        </Text>
        <NumericInput onChangeNumber={this._repsChanged} />

        <Text>
          Rest
        </Text>
        <NumericInput onChangeNumber={this._restChanged} />
      </View>
    );
  }
}
