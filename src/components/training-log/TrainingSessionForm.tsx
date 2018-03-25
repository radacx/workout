import {
  View,
  Text,
  Button,
} from 'react-native';
import * as React from 'react';
import { NumericInput } from '../NumericInput';
import { SessionExercisesList } from '../../containers/training-log/SessionExercisesList';
import { Guid } from '../../models/Guid';
import { UpdatedSession } from '../../models/data/UpdatedSession';
import { DatePicker } from '../DatePicker';
import { NavigationManager } from './TrainingLog';

export interface TrainingSessionFormDataProps {
  date: number;
  bodyweight: number;
}

export interface TrainingSessionFormCallbackProps {
  updateTrainingSession: (session: UpdatedSession) => void;
}

export interface TrainingSessionFormOwnProps {
  sessionId: Guid;
}

type Props = Readonly<TrainingSessionFormCallbackProps
  & TrainingSessionFormOwnProps
  & TrainingSessionFormDataProps>;

type State = Readonly<{
  date: number;
  bodyweight: number;
}>;

export class TrainingSessionForm extends React.PureComponent<Props, State> {
  static displayName = 'TrainingSessionForm';

  readonly state: State = {
    bodyweight: this.props.bodyweight,
    date: this.props.date,
  };

  _onChangedBodyweight = (bodyweight: number) =>
    this.setState({
      bodyweight,
    });

  _onDateChanged = (date: number) =>
    this.setState({
      date,
    });

  _updateTrainingSession = () => {
    this.props.updateTrainingSession({
      ...this.state,
      id: this.props.sessionId,
    });

    NavigationManager.pop();
  };

  componentWillReceiveProps({ date, bodyweight }: Props) {
    this.setState({
      date,
      bodyweight,
    });
  }

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
          value={this.state.date}
          onDateChange={this._onDateChanged}
        />

        <Button
          title="Save changes"
          onPress={this._updateTrainingSession}
        />

        <SessionExercisesList sessionId={this.props.sessionId}/>
      </View>
    );
  }
}
