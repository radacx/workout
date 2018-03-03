import * as React from 'react';
import {
  Text,
  View,
  Picker,
} from 'react-native';
import { Exercise } from '../models/Exercise';

interface IProps {
  readonly exercises: Exercise[];
}

interface IState {
  readonly selectedExercise: Exercise;
}

export class Temp extends React.PureComponent<IProps, IState> {
  state: IState = {
    selectedExercise: this.props.exercises[0],
  };

  _selectedExerciseChanged = (exercise: Exercise) =>
    this.setState({
      selectedExercise: exercise,
    });

  render() {
    const pickerValues = this.props.exercises.map((exercise, index) =>
      <Picker.Item
        key={index}
        label={exercise.name}
        value={exercise}
      />
    );

    return (
      <View>
        <Text>
          Exercise
        </Text>
        <Picker
          selectedValue={this.state.selectedExercise}
          onValueChange={this._selectedExerciseChanged}
        >
          {pickerValues}
        </Picker>
      </View>
    );
  }
}
