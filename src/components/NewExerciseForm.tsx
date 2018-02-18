import {
  View,
  Picker,
} from 'react-native';
import React from 'react';
import { MovementPlane } from '../models/enums/MovementPlane';
import { MovementPlanePicker } from './MovementPlanePicker';
import { allMovementPlanes } from '../constants/allMovementPlanes';

export interface INewExerciseFormProps {
  movementPlanes: MovementPlane[];
}

interface INewExerciseFormState {
  movementPlanes: MovementPlane[];
}

export class NewExerciseForm extends React.PureComponent<INewExerciseFormProps, INewExerciseFormState> {
  constructor(props: INewExerciseFormProps) {
    super(props);

    this.state = {
      movementPlanes: [],
    };
  }

  _valueChanged = (value: MovementPlane) =>
    this.setState({
      value,
    });

  render() {
    return (
      <View>
        <MovementPlanePicker movementPlanes={allMovementPlanes} />
      </View>
    );
  }
}
