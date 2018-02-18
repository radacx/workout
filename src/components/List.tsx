import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  Button,
  View,
} from 'react-native';
import { Exercises } from '../containers/Exercises';

export interface IListCallbackProps {
  readonly addExercise: () => void;
}

export class List extends React.PureComponent<IListCallbackProps> {
  static displayName = 'List';

  static propTypes = {
    addExercise: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.props.addExercise}
          title={'Add random exercise'}
        />
        <Exercises />
      </View>
    );
  }
}
