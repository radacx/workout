import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { ComboBox } from '../ComboBox';
import { Exercise } from '../../models/data/Exercise';
import { NavigationManager } from './TrainingLog';
import { SessionExercise } from '../../models/data/SessionExercise';
import { createNewId } from '../../utils/createNewId';

export interface SessionExerciseFormDataProps {
  exercises: Exercise[];
}

export interface SessionExerciseFormCallbackProps {
  addExercise: (exercise: SessionExercise) => void;
}

export type SessionExerciseFormProps = Readonly<SessionExerciseFormDataProps
  & SessionExerciseFormCallbackProps>;

type State = Readonly<{
  selectedExercise: Exercise;
}>;

export class SessionExerciseForm extends React.PureComponent<SessionExerciseFormProps, State> {
  static displayName = 'SessionExerciseForm';

  readonly state: State = {
    selectedExercise: this.props.exercises[ 0 ],
  };

  _exerciseChanged = (exercise: Exercise) =>
    this.setState({
      selectedExercise: exercise,
    });

  _getExerciseLabel = (exercise: Exercise) =>
    exercise.name;

  _submitExercise = () => {
    const sessionExercise: SessionExercise = {
      id: createNewId(),
      sets: {},
      exercise: this.state.selectedExercise.id,
    };

    this.props.addExercise(sessionExercise);

    NavigationManager.dismissModal();
  };

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
