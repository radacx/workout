import DatePicker from 'react-native-datepicker';
import {
  View,
  Text,
  Button,
} from 'react-native';
import * as React from 'react';
import { dateUtils } from '../../utils/dateUtils';
import { NumericInput } from '../NumericInput';
import { SessionExercisesList } from '../../containers/training-log/SessionExercisesList';
import { Guid } from '../../models/Guid';
import { IUpdatedSession } from '../../models/interfaces/IUpdatedSession';

interface State {
  readonly date: string;
  readonly bodyweight: number;
}

export interface TrainingSessionFormDataProps {
  readonly date: number;
  readonly bodyweight: number;
}

export interface TrainingSessionFormCallbackProps {
  readonly updateTrainingSession: (session: IUpdatedSession) => void;
}

export interface TrainingSessionFormOwnProps {
  readonly sessionId: Guid;
}

type Props = TrainingSessionFormCallbackProps & TrainingSessionFormOwnProps & TrainingSessionFormDataProps;

export class TrainingSessionForm extends React.PureComponent<Props, State> {
  readonly state: State = {
    bodyweight: this.props.bodyweight,
    date: dateUtils.toStringFromNumber(this.props.date),
  };

  _onChangedBodyweight = (bodyweight: number) =>
    this.setState({
      bodyweight,
    });

  _onDateChanged = (date: string) =>
    this.setState({
      date,
    });

  _updateTrainingSession = () =>
    this.props.updateTrainingSession({
      bodyweight: this.state.bodyweight,
      date: dateUtils.fromTextToNumber(this.state.date),
      id: this.props.sessionId,
    });

  render() {
    return (
      <View>
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
          date={dateUtils.fromText(this.state.date)}
          mode="date"
          androidMode="spinner"
          placeholder="Select date"
          format="DD.MM.YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={this._onDateChanged}
        />

        <Button
          title="Save changes"
          onPress={this._updateTrainingSession}
        />

        <SessionExercisesList sessionId={this.props.sessionId} />
      </View>
    );
  }
}
