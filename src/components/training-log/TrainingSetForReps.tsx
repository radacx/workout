import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../NumericInput';
import { ITrainingSetForReps } from '../../models/interfaces/ITrainingSession';
import { NavigationManager } from './TrainingLog';

export interface ITrainingSetForDurationCallbackProps {
  readonly onAddSet: (set: ITrainingSetForReps) => void;
}

interface State {
  readonly reps: number;
  readonly rest: number;
  readonly weight?: number;
}

export class TrainingSetForReps extends React.PureComponent<ITrainingSetForDurationCallbackProps, State> {
  readonly state: State = {
    reps: 0,
    rest: 0,
    weight: 0,
  };

  _repsChanged = (reps: number) =>
    this.setState({
      reps,
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
    const set: ITrainingSetForReps = {
      rest: this.state.rest,
      weight: this.state.weight,
      reps: this.state.reps,
      id: new Date().getTime().toString(),
    };

    this.props.onAddSet(set);

    NavigationManager.dismissModal();
  };

  render() {
    return(
      <View>
        <Text>
          Reps
        </Text>
        <NumericInput
          initialNumber={this.state.reps}
          onChangeNumber={this._repsChanged}
        />

        <Text>
          Rest
        </Text>
        <NumericInput
          initialNumber={this.state.rest}
          onChangeNumber={this._restChanged}
        />

        <Text>
          Weight
        </Text>
        <NumericInput
          initialNumber={this.state.weight}
          onChangeNumber={this._weightChanged}
        />

        <Button
          title="Submit"
          onPress={this._onSubmit}
        />
      </View>
    );
  }
}
