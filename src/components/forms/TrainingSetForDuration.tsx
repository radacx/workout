import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../NumericInput';

interface ITrainingSetForDurationState {
  readonly duration: number;
  readonly rest: number;
}

export class TrainingSetForDuration extends React.PureComponent<{}, ITrainingSetForDurationState> {
  _durationChanged = (duration: number) =>
    this.setState({
      duration,
    });

  _restChanged = (rest: number) =>
    this.setState({
      rest,
    });

  render() {
    return(
      <View>
        <Text>
          Duration
        </Text>
        <NumericInput onChangeNumber={this._durationChanged} />

        <Text>
          Rest
        </Text>
        <NumericInput onChangeNumber={this._restChanged} />
      </View>
    );
  }
}
