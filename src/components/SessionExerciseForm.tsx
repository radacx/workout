import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { ComboBox } from './Temp';
import { IExercise } from '../models/interfaces/IExercise';

export interface ISessionExerciseFormDataProps {
  readonly exercises: IExercise[];
}

export interface ISessionExerciseFormOwnProps {
  readonly addExercise: (exercise: IExercise) => void;
}

type SessionExerciseFormProps = ISessionExerciseFormDataProps & ISessionExerciseFormOwnProps;

interface ISessionExerciseFormState {
  readonly selectedExercise: IExercise;
}

export class SessionExerciseForm extends React.PureComponent<SessionExerciseFormProps, ISessionExerciseFormState> {
  state: ISessionExerciseFormState = {
    selectedExercise: this.props.exercises[0],
  };

  _exerciseChanged = (exercise: IExercise) =>
    this.setState({
      selectedExercise: exercise,
    });

  _getExerciseLabel = (exercise: IExercise) =>
    exercise.name;

  _submitExercise = () =>
    this.props.addExercise(this.state.selectedExercise);

  render() {
    return (
      <View>
        <ComboBox
          items={this.props.exercises}
          onItemChange={this._exerciseChanged}
          getLabel={this._getExerciseLabel}
        />
        <Button
          title="Add exercise"
          onPress={this._submitExercise}
        />
      </View>
    );
  }
}
