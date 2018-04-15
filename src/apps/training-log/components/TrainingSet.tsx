import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NumericInput } from '../../_shared/components/NumericInput';
import { TrainingSet as TrainingSetModel } from '../../_types/data/TrainingSet';
import { NavigationManager } from './TrainingLogApp';
import { createNewId } from '../../_shared/utils/createNewId';
import { ExerciseType } from '../../_types/enums/ExerciseType';
import { Validation } from '../../_types/validation/Validation';

export type TrainingSetCallbackProps = {
  readonly onAddSet: (trainingSet: TrainingSetModel) => void;
};

export type TrainingSetOwnProps = {
  readonly exerciseType: ExerciseType;
};

type Props = TrainingSetCallbackProps
  & TrainingSetOwnProps;

type State = {
  readonly repsDuration: number;
  readonly rest: number;
  readonly weight?: number;
};

export class TrainingSet extends React.PureComponent<Props, State> {
  static displayName = 'TrainingSet';

  static propTypes: Validation<Props> = {
    exerciseType: PropTypes.string.isRequired,
    onAddSet: PropTypes.func.isRequired,
  };

  readonly state: State = {
    repsDuration: 0,
    rest: 0,
    weight: 0,
  };

  _repsDurationChanged = (repsDuration: number) =>
    this.setState({ repsDuration });

  _restChanged = (rest: number) =>
    this.setState({ rest });

  _weightChanged = (weight: number) =>
    this.setState({ weight });

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
