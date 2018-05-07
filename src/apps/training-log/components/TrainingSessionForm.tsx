import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from 'react-native';
import * as React from 'react';
import { NumericInput } from '../../_shared/components/NumericInput';
import { SessionExercisesList } from '../containers/SessionExercisesList';
import { Uuid } from '../../_types/Uuid';
import { UpdatedSession } from '../../_types/data/UpdatedSession';
import { DatePicker } from '../../_shared/components/DatePicker';
import { NavigationManager } from './TrainingLogApp';
import { Validation } from '../../_types/validation/Validation';

export type TrainingSessionFormDataProps = {
  readonly date: number;
  readonly bodyweight: number;
};

export type TrainingSessionFormCallbackProps = {
  readonly updateTrainingSession: (session: UpdatedSession) => void;
};

export type TrainingSessionFormOwnProps = {
  readonly sessionId: Uuid;
};

type Props = TrainingSessionFormCallbackProps
  & TrainingSessionFormOwnProps
  & TrainingSessionFormDataProps;

type State = {
  readonly date: number;
  readonly bodyweight: number;
};

export class TrainingSessionForm extends React.PureComponent<Props, State> {
  static displayName = 'TrainingSessionForm';

  static propTypes: Validation<Props> = {
    bodyweight: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    sessionId: PropTypes.string.isRequired,
    updateTrainingSession: PropTypes.func.isRequired,
  };

  readonly state: State = {
    date: 0,
    bodyweight: 0,
  };

  static getDerivedStateFromProps = ({ date, bodyweight }: Props): Partial<State> | null => ({
    date, bodyweight,
  });

  _onChangedBodyweight = (bodyweight: number) =>
    this.setState({ bodyweight });

  _onDateChanged = (date: number) =>
    this.setState({ date });

  _updateTrainingSession = () => {
    this.props.updateTrainingSession({
      ...this.state,
      id: this.props.sessionId,
    });

    NavigationManager.pop();
  };

  render() {
    return (
      <>
        <Text>
          Bodyweight:
        </Text>
        <NumericInput
          initialNumber={this.state.bodyweight}
          onChangeNumber={this._onChangedBodyweight}
        />

        <Text>
          Date:
        </Text>
        <DatePicker
          value={this.state.date}
          onDateChange={this._onDateChanged}
        />

        <Button
          title="Save changes"
          onPress={this._updateTrainingSession}
        />

        <SessionExercisesList sessionId={this.props.sessionId}/>
      </>
    );
  }
}
