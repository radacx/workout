import DatePicker from 'react-native-datepicker';
import {
  View,
  Text,
  Button,
} from 'react-native';
import * as React from 'react';
import { INavigationProps } from '../../models/interfaces/INavigationProps';
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import { dateUtils } from '../../utils/dateUtils';
import { NumericInput } from '../NumericInput';
import { SessionExercisesList } from '../../containers/SessionExercisesList';
import { Guid } from '../../models/Guid';

interface State {
  readonly date: string;
  readonly bodyweight?: number;
}

export interface AddNewTrainingSessionCallbackProps {
  readonly addNewTrainingSession: (session: ITrainingSession) => void;
}

type Props = AddNewTrainingSessionCallbackProps;

export class AddNewTrainingSession extends React.PureComponent<Props, State> {
  readonly state: State = {
    bodyweight: 0,
    date: dateUtils.toString(new Date()),
  };

  private sessionId: Guid;

  componentWillMount () {
    this.sessionId = new Date().getTime().toString();
    const session: ITrainingSession = {
      id: this.sessionId,
      exercises: {},
      date: new Date(),
      bodyweight: 0,
    };

    this.props.addNewTrainingSession(session);
  }

  _onChangedBodyweight = (bodyweight: number) =>
    this.setState({
      bodyweight,
    });

  _onDateChanged = (date: string) =>
    this.setState({
      date,
    });

  render() {
    return (
      <View>
        <Text>
          Bodyweight:
        </Text>
        <NumericInput onChangeNumber={this._onChangedBodyweight} />

        <Text>
          Date:
        </Text>
        <DatePicker
          date={this.state.date.toString()}
          mode="date"
          androidMode="spinner"
          placeholder="Select date"
          format="MM.DD.YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={this._onDateChanged}
        />

        <SessionExercisesList sessionId={this.sessionId} />

        <Button
          title="Save training session"
          onPress={() => undefined}
        />
      </View>
    );
  }
}
