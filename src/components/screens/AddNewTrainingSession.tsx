import DatePicker from 'react-native-datepicker';
import {
  View,
  Text,
  Button,
} from 'react-native';
import * as React from 'react';
import { INavigationProps } from '../../models/interfaces/INavigationProps';
import {
  ISessionExercise,
  ITrainingSession,
} from '../../models/interfaces/ITrainingSession';
import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { IScreen } from '../../models/interfaces/IScreen';
import { dateUtils } from '../../utils/dateUtils';
import { SessionExercisesList } from '../SessionExercisesList';
import { Temp } from '../Temp';
import { NumericInput } from '../NumericInput';
import { TrainingSets } from '../TrainingSets';

interface IAddNewTrainingSessionState {
  readonly date: string;
  readonly bodyweight?: number;
  readonly exercises: IHomogenousObject<ISessionExercise>;
}

export interface IAddNewTrainingSessionCallbackProps {
  addNewTrainingSession: (session: ITrainingSession) => void;
}

type AddNewTrainingSessionProps = IScreen & IAddNewTrainingSessionCallbackProps;

export class AddNewTrainingSession extends React.PureComponent<AddNewTrainingSessionProps, IAddNewTrainingSessionState> {
  static NavigationProps: INavigationProps = {
    screen: 'AddNewTrainingSession',
    title: 'New training session',
  };

  state: IAddNewTrainingSessionState = {
    bodyweight: 0,
    exercises: {},
    date: dateUtils.toString(new Date()),
  };

  _addTrainingSession = () => {
    const {
      date,
      bodyweight,
      exercises,
    } = this.state;

    this.props.addNewTrainingSession({
      date: dateUtils.fromText(date),
      bodyweight: bodyweight ? +bodyweight : 0,
      exercises,
      id: new Date().getTime()
        .toString(),
    });
  };

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

        <TrainingSets sets={[
          {
            id: '1',
            duration: 100,
            rest: 20,
          },
          {
            id: '2',
            duration: 8,
            weight: 40,
            rest: 20,
          },
          {
            id: '3',
            reps: 15,
            rest: 20,
          },
        ]}/>

        <Temp exercises={[
          {
            id: '44',
            name: 'dsada',
            planesOfMovement: [],
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [],
          },
          {
            id: '55',
            name: 'dsada2',
            planesOfMovement: [],
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [],
            relativeBodyweight: 50,
          },
        ]} />

        <SessionExercisesList exercises={Object.keys(this.state.exercises).map(key => this.state.exercises[key])}/>

        <Button
          title="add"
          onPress={this._addTrainingSession}
        />
      </View>
    );
  }
}
