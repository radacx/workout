import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../NumericInput';
import { ITrainingSetForDuration } from '../../models/interfaces/ITrainingSession';

interface ITrainingSetForDurationProps {
  readonly onAddSet: (set: ITrainingSetForDuration) => void;
}

interface ITrainingSetForDurationState {
  readonly duration: number;
  readonly rest: number;
  readonly weight?: number;
}

export class TrainingSetForDuration extends React.PureComponent<ITrainingSetForDurationProps, ITrainingSetForDurationState> {
  _durationChanged = (duration: number) =>
    this.setState({
      duration,
    });

  _restChanged = (rest: number) =>
    this.setState({
      rest,
    });

  _weightChanged = (weight: number) =>
    this.setState({
      weight,
    });

  _onSubmit = () =>
    this.props.onAddSet({
      rest: this.state.rest,
      weight: this.state.weight,
      duration: this.state.duration,
      id: new Date().getTime().toString(),
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

        <Text>
          Weight
        </Text>
        <NumericInput onChangeNumber={this._weightChanged} />

        <Button
          title="Submit"
          onPress={this._onSubmit}
        />
      </View>
    );
  }
}
