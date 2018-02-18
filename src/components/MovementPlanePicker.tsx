import {
  View,
  Picker,
} from 'react-native';
import React from 'react';
import { MovementPlane } from '../models/enums/MovementPlane';

export interface IMovementPlanePickerProps {
  movementPlanes: MovementPlane[];
}

interface IMovementPlanePickerState {
  selectedMovementPlane?: MovementPlane;
}

export class MovementPlanePicker extends React.PureComponent<IMovementPlanePickerProps, IMovementPlanePickerState> {
  constructor(props: IMovementPlanePickerProps) {
    super(props);

    this.state = {
      selectedMovementPlane: undefined,
    };
  }

  _planeChanged = (plane: MovementPlane) =>
    this.setState({
      selectedMovementPlane: plane,
    });

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedMovementPlane}
          onValueChange={this._planeChanged}
        >
          {this.props.movementPlanes.map(plane =>
            <Picker.Item
              key={plane}
              label={plane}
              value={plane}
            />,
          )}
        </Picker>
      </View>
    );
  }
}
