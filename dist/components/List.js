import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Button, View, } from 'react-native';
import { Exercises } from '../containers/Exercises';
export class List extends React.PureComponent {
    render() {
        return (React.createElement(View, null,
            React.createElement(Button, { onPress: this.props.addExercise, title: 'Add random exercise' }),
            React.createElement(Exercises, null)));
    }
}
List.displayName = 'List';
List.propTypes = {
    addExercise: PropTypes.func.isRequired,
};
//# sourceMappingURL=E:/JavaScript/workout/components/List.js.map