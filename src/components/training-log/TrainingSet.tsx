import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../NumericInput';
import { TrainingSet as TrainingSetModel } from '../../models/data/TrainingSet';
import { NavigationManager } from './TrainingLog';
import { createNewId } from '../../utils/createNewId';
import { ExerciseType } from '../../models/enums/ExerciseType';

export interface TrainingSetCallbackProps {
  onAddSet: (trainingSet: TrainingSetModel) => void;
}

export interface TrainingSetOwnProps {
  exerciseType: ExerciseType;
}

type Props = Readonly<TrainingSetCallbackProps
  & TrainingSetOwnProps>;

type State = Readonly<{
  repsDuration: number;
  rest: number;
  weight?: number;
}>;

export class TrainingSet extends React.PureComponent<Props, State> {
  static displayName = 'TrainingSet';

  readonly state: State = {
    repsDuration: 0,
    rest: 0,
    weight: 0,
  };

  _repsDurationChanged = (repsDuration: number) =>
    this.setState({
      repsDuration,
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
    const set: TrainingSetModel = {
      ...this.state,
      id: createNewId(),
    };

    this.props.onAddSet(set);

    NavigationManager.dismissModal();
  };

  render() {
    return (
      <View>
        <Text>
          {this.props.exerciseType === ExerciseType.Reps
            ? 'Reps'
            : 'Duration'}
        </Text>
        <NumericInput
          initialNumber={this.state.repsDuration}
          onChangeNumber={this._repsDurationChanged}
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
