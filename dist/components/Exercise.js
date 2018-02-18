import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text } from 'react-native';
const propTypes = {
    exercise: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};
const Exercise = ({ exercise }) => {
    return (React.createElement(Text, null, exercise.name));
};
Exercise.displayName = 'Exercise';
Exercise.propTypes = propTypes;
export { Exercise };
//# sourceMappingURL=E:/JavaScript/workout/components/Exercise.js.map