import {
  View,
} from 'react-native';
import React from 'react';
import { MovementPlane } from '../models/enums/MovementPlane';
import { MovementPlanePicker } from './MovementPlanePicker';

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

  render() {
    return (
      <View>
        <MovementPlanePicker movementPlanes={[]} />
      </View>
    );
  }
}
