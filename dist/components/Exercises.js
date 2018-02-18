import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Exercise } from './Exercise';
const propTypes = {
    exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const Exercises = ({ exercises }) => React.createElement(FlatList, { data: exercises, renderItem: ({ item }) => React.createElement(Exercise, { exercise: item }), keyExtractor: ({ id }) => id });
Exercises.propTypes = propTypes;
export { Exercises };
//# sourceMappingURL=E:/JavaScript/workout/components/Exercises.js.map