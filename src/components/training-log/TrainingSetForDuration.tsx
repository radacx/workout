import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../NumericInput';
import { ITrainingSetForDuration } from '../../models/interfaces/ITrainingSession';
import { TrainingSet } from '../../models/TrainingSet';
import { NavigationManager } from './TrainingLog';

export interface TrainingSetForDurationCallbackProps {
  readonly onAddSet: (trainingSet: TrainingSet) => void;
}

interface ITrainingSetForDurationState {
  readonly duration: number;
  readonly rest: number;
  readonly weight?: number;
}

export class TrainingSetForDuration extends React.PureComponent<TrainingSetForDurationCallbackProps, ITrainingSetForDurationState> {
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

  _onSubmit = () => {
    const set: ITrainingSetForDuration = {
      rest: this.state.rest,
      weight: this.state.weight,
      duration: this.state.duration,
      id: new Date().getTime().toString(),
    };

    this.props.onAddSet(set);

    NavigationManager.dismissModal();
  };

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
