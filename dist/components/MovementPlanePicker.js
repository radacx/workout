import { View, Picker, } from 'react-native';
import React from 'react';
export class MovementPlanePicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this._planeChanged = (plane) => this.setState({
            selectedMovementPlane: plane,
        });
        this.state = {
            selectedMovementPlane: undefined,
        };
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Picker, { selectedValue: this.state.selectedMovementPlane, onValueChange: this._planeChanged }, this.props.movementPlanes.map(plane => React.createElement(Picker.Item, { key: plane, label: plane, value: plane })))));
    }
}
//# sourceMappingURL=E:/JavaScript/workout/components/MovementPlanePicker.js.map