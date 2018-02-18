import { View, } from 'react-native';
import React from 'react';
import { MovementPlanePicker } from './MovementPlanePicker';
import { allMovementPlanes } from '../constants/allMovementPlanes';
export class NewExerciseForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this._valueChanged = (value) => this.setState({
            value,
        });
        this.state = {
            movementPlanes: [],
        };
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(MovementPlanePicker, { movementPlanes: allMovementPlanes })));
    }
}
//# sourceMappingURL=E:/JavaScript/workout/components/NewExerciseForm.js.map