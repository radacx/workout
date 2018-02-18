import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { Exercises } from '../containers/Exercises';

export interface IListCallbackProps {
  readonly addExercise: () => void;
  readonly updateExercise: () => void;
}

export class List extends React.PureComponent<IListCallbackProps> {
  static displayName = 'List';

  render() {
    return (
      <View>
        <Button
          onPress={this.props.addExercise}
          title={'Add random exercise'}
        />
        <Button
          onPress={this.props.updateExercise}
          title={'Update'}
        />
        <Exercises />
      </View>
    );
  }
}
